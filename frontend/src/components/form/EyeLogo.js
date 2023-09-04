import React from "react";
import eyeOpen from "../../assets/eyeOpen.svg";
import eyeClose from "../../assets/eyeClose.svg";

const EyeLogo = ({ open = true, setOpen }) => {
    return (
        <img src={open ? eyeOpen : eyeClose} className="w-[20px] h-[20px] cursor-pointer" onClick={e => setOpen(!open)} />
    );
};

export default EyeLogo;
