import React from 'react';
import { Link } from 'react-router-dom';
import { SocialMediaData } from '../Other/SocialMediaData';

const LoginSection: React.FC = () => {
    return (
        <section id="login">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        {/* ======= Links ======= */}
                        <div className="links d-flex justify-content-center">
                            <Link to="/login" className="text-dark">Login</Link>
                            <Link to="/register" className="text-muted">Register</Link>
                        </div>
                        {/* ======= Login area ======= */}
                        <div className="login-area account-wrapper">
                            <h6>Log In Your Account</h6>
                            <form>
                                {/* === username or email === */}
                                <div className="inputs-wrapper w-100">
                                    <input type="text" className="w-100" name="email" placeholder="Username or Email" />
                                </div>
                                {/* === password === */}
                                <div className="inputs-wrapper w-100">
                                    <input type="password" className="w-100" name="password" placeholder="Password" />
                                </div>
                                {/* === checkbox === */}
                                <div className="checkbox-input-wrapper d-flex">
                                    <input type="checkbox" name="remember" id="remember" />
                                    <label htmlFor="remember">Rememeber me</label>
                                </div>
                                {/* === submit btn === */}
                                <div className="submit-btn login">
                                    <input type="submit" className="w-100" value="Login" />
                                </div>
                                {/* === social media === */}
                                <div className="social-media">
                                    <p>Connect with:</p>
                                    <ul className="d-flex">
                                        {
                                            SocialMediaData.map(item => (
                                                <li key={item.id}>
                                                    <a href={item.href} className={item.class}>{item.icon}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginSection;