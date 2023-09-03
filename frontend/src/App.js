import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/index"
import Login from "./pages/Login/index"
import Signup from "./pages/Signup/Signup"

function App() {
    // console.log(CountryList.getAll()[1])
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
