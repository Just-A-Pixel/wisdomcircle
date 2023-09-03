import React from "react";

const FormContainer = ({ children }) => {
    return (
        <div className="lg:grid lg:h-screen lg:place-items-center mx-[auto]">
            <div className="px-[20px] w-[360px] mx-auto align-top h-screen lg:h-auto max-h-[500px] flex flex-col justify-start lg:justify-normal lg:flex-none lg:m-auto">
                {children}
            </div>
        </div>
    );
};

export default FormContainer;
