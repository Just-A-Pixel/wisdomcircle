import React from "react";

const Submit = ({ signup = false, submitData }) => {
    return (
            <div
                className={"bg-yellow w-[320px]  h-[40px] mt-[auto] lg:mt-[16px]  text-center pt-[8px] mx-auto font-sans font-semibold text-[16px] cursor-pointer"}
                onClick={submitData}
            >
                {signup ? "Sign Up" : "Sign In"}
            </div>
    );
};

export default Submit;
