import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import LoginSection from '../components/Account/LoginSection';

const Login: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="login-content">
            <div className="main">
                {/* ===== breadcrumb ===== */}
                <section id="breadcrumb">
                    <div className="container">
                        <ul className="breadcrumb-content d-flex m-0 p-0">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <span>Login</span>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* ===== content ===== */}
                <LoginSection />
            </div>
        </div>
    )
};

export default Login;