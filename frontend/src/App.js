
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./assets/logo.svg";
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"

function App() {
    return (
        <BrowserRouter>
            <img src={logo} className="my-[40px] mx-auto lg:hidden" />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
        </BrowserRouter>
    );
}

export default App;
