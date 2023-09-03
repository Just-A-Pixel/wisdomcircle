import React from "react";

const FormContainer = ({ children }) => {
    return (
        <div className="md:grid h-screen place-items-center">
            <div className="px-[20px] w-[360px] mx-auto align-top h-screen md:h-auto max-h-[500px] flex flex-col justify-start md:justify-normal md:flex-none md:m-auto">
                {children}
            </div>
        </div>
    );
};

export default FormContainer;
