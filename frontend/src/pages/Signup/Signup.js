import React, { useEffect, useState } from "react";

import InputBox from "../../components/form/InputBox";
import FormContainer from "../../components/form/FormContainer";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import AuthText from "../../components/form/AuthText";

import PhoneInput from "../../components/form/PhoneInput";
import Submit from "../../components/form/Submit";
import Banner from "../../components/form/Banner";
const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [extension, setExtension] = useState("");
    const [phone, setPhone] = useState("");
    const [validPhone, setValidPhone] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);

    const submitData = async () => {
        const data = {
            firstName,
            lastName,
            email,
            extension,
            phone,
            password,
        };

        try {
            await axios.post(
                "http://localhost:4000/api/auth/signup",
                data
            );
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
                        !validEmail && email.length != 0 ? "" : "hidden"
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
                <InputBox
                    type="password"
                    placeholder="Confirm Password"
                    state={confirmPassword}
                    setState={setConfirmPassword}
                    isValid={
                        password === confirmPassword ||
                        confirmPassword.length === 0
                    }
                />
                <label
                    className={`${
                        password != confirmPassword &&
                        confirmPassword.length !== 0
                            ? ""
                            : "hidden"
                    } font-sans text-[12px] text-red`}
                >
                    Password does not match
                </label>
                <Submit signup={true} submitData={submitData} />
            </FormContainer>
        </div>
    );
};

export default Signup;
