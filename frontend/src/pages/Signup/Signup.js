import React, { useEffect, useState } from "react";

import InputBox from "../../components/form/InputBox";
import FormContainer from "../../components/form/FormContainer";
import axios from "axios";
import AuthText from "../../components/form/AuthText";
import PhoneInput from "../../components/form/PhoneInput";
import Submit from "../../components/form/Submit";
import Banner from "../../components/form/Banner";

import VerifyEmailModal from "../../components/form/VerifyEmailModal";
const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [extension, setExtension] = useState("");
    const [phone, setPhone] = useState("");
    const [validPhone, setValidPhone] = useState(false);
    const [password, setPassword] = useState("");
    const [hideModal, setHideModal] = useState(true);

    const submitData = async () => {
        if (
            firstName === "" ||
            lastName === "" ||
            email === "" ||
            extension === "" ||
            phone === "" ||
            password === ""
        ) {
            alert("Fields cannot be empty");
            return;
        }

        if (!validEmail) {
            alert("Please enter valid email");
            return
        }

        if (!validPhone) {
            alert("Please enter a valid phone number")
            return
        }   

        if (password.length < 8 && password.length > 0) {
            alert("Password should not be less than 8 characters")
            return
        }    

        const data = {
            firstName,
            lastName,
            email,
            extension,
            phone,
            password,
        };

        try {
            await axios.post("http://localhost:4000/api/auth/signup", data);
            setHideModal(false);
        } catch (err) {
            console.log(err.response.status);
            if (err.response.status === 400) {
                alert("Email or phone already exists!");
            } else {
                console.log(err);
                alert("An unknown error has occurred");
            }
        }
    };

    useEffect(() => {
        setValidEmail(validateEmail(email));
    }, [email]);

    const validateEmail = (email) => {
        // eslint-disable-next-line
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return email.match(mailformat) != null ? true : false;
    };

    return (
        <div className="flex justify-start">
            <Banner />
            <FormContainer>
                <AuthText signup={true} />
                <InputBox
                    type="text"
                    placeholder="First Name"
                    state={firstName}
                    setState={setFirstName}
                />
                <InputBox
                    type="text"
                    placeholder="Last Name"
                    state={lastName}
                    setState={setLastName}
                />
                <InputBox
                    id="email"
                    type="email"
                    placeholder="Email"
                    state={email}
                    isValid={validEmail || email.length === 0}
                    setState={setEmail}
                />
                <label
                    className={`${
                        !validEmail && email.length !== 0 ? "" : "hidden"
                    } font-sans text-[12px] text-red`}
                >
                    Please enter a valid email address
                </label>

                <PhoneInput
                    extension={extension}
                    phone={phone}
                    setExtension={setExtension}
                    setPhone={setPhone}
                    validPhone={validPhone}
                    setValidPhone={setValidPhone}
                />
                <InputBox
                    type="password"
                    placeholder="Password"
                    state={password}
                    setState={setPassword}
                />

                <label
                    className={`font-sans text-[12px]`}
                >
                    Password should be 8 characters
                </label>

                <p className="font-sans text-[12px] mt-[16px]">By clicking Sign Up you are indicating that you have read and acknowledged the <span className=" text-royalBlue cursor-pointer text-[12px]">Terms of Service</span> and <span className=" text-royalBlue cursor-pointer text-[12px]">Privacy Notice</span></p>

                
                <Submit signup={true} submitData={submitData} />
            </FormContainer>

            <VerifyEmailModal
                email={email}
                hidden={hideModal}
                setHideModal={setHideModal}
            />
        </div>
    );
};

export default Signup;
