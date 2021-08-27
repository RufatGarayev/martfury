import React from 'react';
import { Link } from 'react-router-dom';
import { SocialMediaData } from '../Other/SocialMediaData';

const RegisterSection: React.FC = () => {
    return (
        <section id="register">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-8 offset-xl-3 offset-lg-3 offset-md-2">
                        <div className="links d-flex justify-content-center">
                            <Link to="/login" className="text-muted">Login</Link>
                            <Link to="/register" className="text-dark">Register</Link>
                        </div>
                        <div className="register-area account-wrapper">
                            <h6>Register An Account</h6>
                            <form>
                                <div className="inputs-wrapper w-100">
                                    <input type="text" className="w-100" name="first-name" placeholder="First Name" />
                                </div>
                                <div className="inputs-wrapper w-100">
                                    <input type="text" className="w-100" name="last-name" placeholder="Last Name" />
                                </div>
                                <div className="inputs-wrapper w-100">
                                    <input type="text" className="w-100" name="email" placeholder="Email" />
                                </div>
                                <div className="inputs-wrapper w-100">
                                    <input type="password" className="w-100" name="password" placeholder="Password" />
                                </div>
                                <div className="submit-btn register">
                                    <input type="submit" className="w-100" value="Register" />
                                </div>
                                <div className="social-media">
                                    <small>Connect with:</small>
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
};

export default RegisterSection;