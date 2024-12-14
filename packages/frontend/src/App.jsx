import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LogIn from "./pages/LogIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    return (
        <Router>
            <Routes>
                {/* unauthenticated routes */}
                <Route path="/login" element={<LogIn onLogin={handleLogin}/>}/>
                <Route path="/signup" element={<SignUp />}/>

                {/* authenticated routes */}
                <Route path="/" element={ isAuthenticated ? <Home/> : <Navigate to="/login" replace/>}/>
            </Routes>
        </Router>
    );
};

export default App;