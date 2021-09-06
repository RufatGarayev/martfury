import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { SocialMediaData } from '../Other/SocialMediaData';

const LoginSection: React.FC = () => {
    const validationSchema = Yup.object().shape({
        userNameOrEmail: Yup.string()
            .required('Username or Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, formState: { errors } } = useForm(formOptions);

    return (
        <section id="login">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-8 offset-xl-3 offset-lg-3 offset-md-2">
                        <div className="links d-flex justify-content-center">
                            <Link to="/login" className="text-dark">Login</Link>
                            <Link to="/register" className="text-muted">Register</Link>
                        </div>
                        <div className="login-area account-wrapper">
                            <h6>Log In Your Account</h6>
                            <form onSubmit={handleSubmit((data) => {
                                console.log(data)
                            })}>
                                <div className="inputs-wrapper w-100">
                                    <input
                                        type="text"
                                        className={`w-100 ${errors.userNameOrEmail ? "error-border" : ""}`}
                                        placeholder="Username or Email"
                                        {...register("userNameOrEmail")}
                                    />
                                    {errors.userNameOrEmail && <p>{errors.userNameOrEmail.message}</p>}
                                </div>
                                <div className="inputs-wrapper w-100">
                                    <input
                                        type="password"
                                        className={`w-100 ${errors.password ? "error-border" : ""}`}
                                        placeholder="Password"
                                        {...register("password")}
                                    />
                                    {errors.password && <p>{errors.password.message}</p>}
                                </div>
                                <div className="checkbox-input-wrapper d-flex">
                                    <input type="checkbox" name="remember" id="remember" />
                                    <label htmlFor="remember">Rememeber me</label>
                                </div>
                                <div className="submit-btn login">
                                    <input type="submit" className="w-100" value="Login" />
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

export default LoginSection;