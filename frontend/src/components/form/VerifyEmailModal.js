import React from "react";
import cross from "../../assets/cross.svg"
const VerifyEmailModal = ({email, hidden = true, setHideModal}) => {
    return (
        <div
            className={`absolute rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[486px] bg-white ${hidden?"hidden":""}`}
            style={{ boxShadow: "0 0 100px 1000px rgba(0, 0, 0, 0.5)" }}
        >
            <div className="flex justify-start">
                <h1 className="p-[24px] pb-0 font-semibold">Verify Email</h1>
                <img
                    src={cross}
                    onClick={e => {setHideModal(true)}}
                    className="ml-auto p-[24px] pb-0 cursor-pointer"
                />
            </div>

            <hr className="h-px my-[16px] bg-gray-200 border-0"></hr>
            <p className="pl-[24px] pr-[72px] pb-[67px] font-normal leading-6">
                Please verify your account. We have sent an email to
                <span className="font-semibold text-grey">
                    {" " + email}
                </span>{" "}
                If you are unable to find the verification email please contact
                us at:{" "}
                <span className="font-semibold text-grey">+91-9380644532</span>
            </p>
        </div>
    );
};

export default VerifyEmailModal;
