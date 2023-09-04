import React, { useEffect } from "react";
import CountryList from "country-list-with-dial-code-and-flag";

const PhoneInput = ({
    extension,
    phone,
    setExtension,
    setPhone,
    validPhone,
    setValidPhone,
}) => {
    const options = CountryList.getAll();

    useEffect(() => {
        var reg =  /^-?\d*\.?\d*$/;
        if((phone.length != 10 && phone.length > 0) || !phone.match(reg)) {
            setValidPhone(false)
        } else {
            setValidPhone(true)
        }
    }, [phone]);

    return (
        <>
            <div className="flex justify-between">
                <select
                    onChange={(e) => setExtension(e.target.value)}
                    className=" mt-[16px] text-[28px] w-[64px] border border-gray-80 mr-[10px] rounded-lg"
                >
                    <option>
                        --
                    </option>
                    {options.map((e) => {
                        return (
                            <option
                                value={e.data.dial_code}
                                key={e.data.dial_code}
                            >
                                {e.data.flag}
                            </option>
                        );
                    })}
                </select>
                <input
                    id="phone"
                    placeholder="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`font-sans text-[14px] px-[16px] py-[12px] w-[320px] mt-[16px] rounded-lg border ${validPhone?"border-gray-80  focus:border-black":"border-red focus:border-red text-red"}  focus:border-black focus:outline-none`}
                ></input>
            </div>
            <label
                className={`${
                    !validPhone && phone.length != 0 ? "" : "hidden"
                } font-sans text-[12px] text-red`}
            >
                Please enter a valid phone number
            </label>
        </>
    );
};

export default PhoneInput;
