import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import InputBox from "../../components/form/InputBox";
import FormContainer from "../../components/form/FormContainer";
import axios from "axios";

import PhoneInput from "../../components/form/PhoneInput";
const Login = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [extension, setExtension] = useState("");
    const [phone, setPhone] = useState("");
    const [validPhone, setValidPhone] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const submitData = async () => {
        const data = {
            firstName,
            lastName,
            email,
            extension,
            phone,
            password
        }

        try {
            const res = await axios.post("http://localhost:4000/api/auth/signup", data)
            console.log(res)
        } catch (err) {
            console.log(err)
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
        <>
            <img src={logo} className="my-[40px] mx-auto" />
            <FormContainer>
                <h1>Sign Up to WisdomCircle</h1>
                <h3 className="text-charcoal">
                    Already have an account?{" "}
                    <span className="font-semibold text-royalBlue">
                        Sign in
                    </span>
                </h3>
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
                    isValid={password === confirmPassword || confirmPassword.length === 0}
                />
                <label
                    className={`${
                        password != confirmPassword && confirmPassword.length !== 0 ? "" : "hidden"
                    } font-sans text-[12px] text-red`}
                >
                    Password does not match
                </label>
            </FormContainer>
            <div
                className="bg-yellow w-[320px] mx-auto mt-[16px] h-[40px] text-center pt-[8px] font-sans font-semibold text-[16px]"
                onClick={(e) => submitData()}
            >
                Sign Up
            </div>
        </>
    );
};

export default Login;
