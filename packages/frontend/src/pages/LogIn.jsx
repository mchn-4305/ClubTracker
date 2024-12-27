// src/pages/LogIn.jsx
import React from 'react';
import { useNavigate } from "react-router-dom";
import LogInForm from "./LogInForm";
import styles from "./LogIn.module.css";

const LogIn = ( { onLogin } ) => {
    const handleAuth = () => {
        return null;
    }

    return (
        <div className={`${styles.container}`}>
            <h1>Club<span>Tracker</span></h1>
            <LogInForm login={handleAuth}/>
        </div>
    );
};

export default LogIn;