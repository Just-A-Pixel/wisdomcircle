import React from "react";
import { useNavigate } from "react-router-dom";

const AuthText = ({ signup = false }) => {
    const navigate = useNavigate();
    return (
        <>
        {signup?
        <h1>Sign Up to WisdomCircle</h1>: <h1>Sign In to WisdomCircle</h1>
        }
            
            <h3 className="text-charcoal">
                {signup? "Already have an account?" : "Don't have an account?"}{" "}
                <span
                    onClick={(e) =>
                        signup ? navigate("/login") : navigate("/signup")
                    }
                    className="font-semibold text-royalBlue"
                >
                    {signup ? "Sign In" : "Sign Up"}
                </span>
            </h3>
        </>
    );
};

export default AuthText;
