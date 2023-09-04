import React, { useEffect } from "react";
import logo from "../../assets/logoLarge.svg";
import mascot from "../../assets/mascot.png";
import line from "../../assets/line.svg"

const Banner = () => {
    useEffect(() => {
        console.log("refreshed")
    }) 
    return (
        <div className="bg-grey text-white w-[526px] hidden lg:block">
            <div className="flex flex-col h-[100%] justify-around">
                {/* logo */}
                <img src={logo} className=" max-w-[217px] mx-auto mt-[216px]" />
                {/* flex */}
                <div className="flex mt-auto">
                    {/* logo */}
                    <div>
                        <img src={mascot} className="w-[165px] h-[219px] mt-[90px] object-cover" />
                    </div>
                    

                    {/* text */}
                    <div>
                        <h1>Welcome Back!</h1>
                        <p className="w-[337px] font-sans text-[16px]">
                            Sign In to find opportunities that match your
                            interests. We have both part-time and full-time
                            roles that can be done online and in-person.
                        </p>
                        <img src={line} className="mt-[48px]"/>
                        <h3 className="mt-[64px] mb-[24px]">Please contact us at <span className="font-semibold">+91-9380644532</span> if you need any assistance.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
