import React, { useEffect } from "react";
import logo from "../../assets/logoLarge.svg";
import mascot from "../../assets/mascot.png";

const Banner = () => {
    useEffect(() => {
        console.log("refreshed")
    }) 
    return (
        <div className="bg-grey text-white w-[526px] hidden lg:block">
            <div className="flex flex-col h-[100%] justify-around">
                {/* logo */}
                <img src={logo} className=" max-w-[217px] mx-auto" />
                {/* flex */}
                <div className="flex border border-red">
                    {/* logo */}

                    <img src={mascot} className="w-[165px] " />

                    {/* text */}
                    <div>
                        <h1>Welcome Back!</h1>
                        <p className="w-[337px] font-sans text-[16px]">
                            Sign In to find opportunities that match your
                            interests. We have both part-time and full-time
                            roles that can be done online and in-person.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
