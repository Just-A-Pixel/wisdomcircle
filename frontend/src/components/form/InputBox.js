import React, { useState } from "react";
import EyeLogo from "./EyeLogo";

const InputBox = ({ type, placeholder, state, setState, id = "", isValid = true }) => {
    const [open, setOpen] = useState(true);
    const [focus, setFocus] = useState(false);
    return (
        <>
        <div className="flex">
            <input
                id = {id}
                type={
                    type === "password" && open
                        ? "password"
                        : type === "password" && !open
                        ? "text"
                        : type
                }
                placeholder={placeholder}
                value={state}
                onChange={(e) => setState(e.target.value)}
                onFocus={(e) => setFocus(true)}
                onBlur={(e) => setFocus(false)}
                className={`${
                    type === "password" ? "border-r-0 rounded-r-none" : ""
                } font-sans rounded-lg text-[14px] px-[16px] py-[12px] w-[320px] mt-[16px] border ${isValid?"border-gray-80  focus:border-black":"border-red focus:border-red text-red"} focus:outline-none`}
            />
            {type === "password" ? (
                <span
                    className={`px-[16px] py-[12px] mt-[16px] border border-l-0  focus:outline-none focus:border-black rounded-lg rounded-l-none
                    ${isValid?"border-gray-80  focus:border-black":"border-red focus:border-red text-red"}
                    ${
                        focus ? "border-black" : "border-gray-8"
                    }`}
                >
                    <EyeLogo open={open} setOpen={setOpen} />
                </span>
            ) : null}
            <br/>
            
        </div>
        </>
    );
};

export default InputBox;
