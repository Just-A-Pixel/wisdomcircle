import React, { useEffect, useState } from "react";
import FormContainer from "../../components/form/FormContainer";
import InputBox from "../../components/form/InputBox";
import AuthText from "../../components/form/AuthText";
import Submit from "../../components/form/Submit";
import Banner from "../../components/form/Banner";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [value, setValue] = useState("");
    const [password, setPassword] = useState("");
    const [validPass, setValidPass] = useState(true);
    const [invalidEmailOrPhone, setInvalidEmailOrPhone] = useState("none");
    const [invalidMessage, setInvalidMessage] = useState({
        code: null,
        message: null,
    });

    const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
    const navigate = useNavigate();
    // const checkValueValidity = () => {
    //     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //     var phoneFormat = /^\d+$/;

    //     let emailMatch = value.match(mailformat) != null ? true : false;
    //     let phoneMatch = value.match(phoneFormat) != null && value.length == 10 ? true : false;

    //     if(emailMatch || phoneMatch) return "none"
    //     else if(!phoneMatch) return "phone"
    // };

    // useEffect(() => {
    //   setInvalidEmailOrPhone(checkValueValidity())
    // }, [value])

    const checkEmail = () => {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return value.match(mailformat) != null ? true : false;
    };
    const submitData = async () => {
        if (value === "" || value === null) {
            alert("Phone or email cannot be empty");
            return;
        }
        const isEmail = checkEmail();
        try {
            const data = isEmail
                ? {
                      email: value,
                      phone: null,
                      password: password,
                  }
                : {
                      email: null,
                      phone: value,
                      password: password,
                  };

            const res = await axios.post(
                "http://localhost:4000/api/auth/signin",
                data
            );
            setInvalidMessage({ code: null, message: null });
            setCookie("jwt", res.data.accessToken);
            navigate("/home");
        } catch (err) {
            const status = err.response.status;
            if (status === 404) {
                if (isEmail) {
                    setInvalidMessage({
                        code: "email",
                        message: "Sorry! This email is not registered.",
                    });
                } else {
                    setInvalidMessage({
                        code: "phone",
                        message: "Sorry! This phone is not registered.",
                    });
                }
            } else if (status === 401) {
                setInvalidMessage({
                    code: "password",
                    message: "Sorry! Password entered is incorrect",
                });
            } else {
                alert("An unknown error has occurred");
            }
            console.log(err);
        }
    };

    return (
        <div className="flex justify-start">
            <Banner />
            <FormContainer>
                <AuthText />
                <InputBox
                    placeholder={"Email Id or Phone Number"}
                    state={value}
                    setState={setValue}
                    isValid={
                        (invalidEmailOrPhone === "none" ||
                            value.length === 0) &&
                        (invalidMessage.code === null ||
                        invalidMessage.code === "password")
                            ? true
                            : false
                    }
                />
                <label
                    className={` ${
                        invalidMessage.code === "email" ||
                        invalidMessage.code === "phone"
                            ? ""
                            : "hidden"
                    } font-sans text-[12px] text-red`}
                >
                    {invalidMessage.message}
                </label>
                <InputBox
                    type="password"
                    placeholder="Password"
                    state={password}
                    setState={setPassword}
                    isValid={
                      (invalidMessage.code === null ||
                      invalidMessage.code !== "password")
                          ? true
                          : false
                  }
                />
                <label
                    className={` ${
                        invalidMessage.code === "password" ? "" : "hidden"
                    } font-sans text-[12px] text-red`}
                >
                    {invalidMessage.message}
                </label>
                <Submit submitData={submitData} />
            </FormContainer>
        </div>
    );
};

export default Login;
