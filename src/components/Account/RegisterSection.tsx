import React from 'react';
import { Link } from 'react-router-dom';
import { SocialMediaData } from '../Other/SocialMediaData';

const RegisterSection: React.FC = () => {
    return (
        <section id="register">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        {/* ======= Links ======= */}
                        <div className="links d-flex justify-content-center">
                            <Link to="/login" className="text-muted">Login</Link>
                            <Link to="/register" className="text-dark">Register</Link>
                        </div>
                        {/* ======= Register area ======= */}
                        <div className="register-area account-wrapper">
                            <h6>Register An Account</h6>
                            <form>
                                {/* === first-name === */}
                                <div className="inputs-wrapper w-100">
                                    <input type="text" className="w-100" name="first-name" placeholder="First Name" />
                                </div>
                                {/* === last-name === */}
                                <div className="inputs-wrapper w-100">
                                    <input type="text" className="w-100" name="last-name" placeholder="Last Name" />
                                </div>
                                {/* === email === */}
                                <div className="inputs-wrapper w-100">
                                    <input type="text" className="w-100" name="email" placeholder="Email" />
                                </div>
                                {/* === password === */}
                                <div className="inputs-wrapper w-100">
                                    <input type="password" className="w-100" name="password" placeholder="Password" />
                                </div>
                                {/* === submit btn === */}
                                <div className="submit-btn register">
                                    <input type="submit" className="w-100" value="Register" />
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

export default RegisterSection;