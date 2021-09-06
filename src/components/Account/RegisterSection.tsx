import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { SocialMediaData } from '../Other/SocialMediaData';

const RegisterSection: React.FC = () => {
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('First Name is required'),
        lastName: Yup.string()
            .required('Last name is required'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, formState: { errors } } = useForm(formOptions);

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
                            <form onSubmit={handleSubmit((data) => {
                                console.log(data)
                            })}>
                                <div className="inputs-wrapper w-100">
                                    <input
                                        type="text"
                                        className={`w-100 ${errors.firstName ? "error-border" : ""}`}
                                        placeholder="First Name"
                                        {...register("firstName")}
                                    />
                                    {errors.firstName && <p>{errors.firstName.message}</p>}
                                </div>
                                <div className="inputs-wrapper w-100">
                                    <input
                                        type="text"
                                        className={`w-100 ${errors.lastName ? "error-border" : ""}`}
                                        placeholder="Last Name"
                                        {...register("lastName")}
                                    />
                                    {errors.lastName && <p>{errors.lastName.message}</p>}
                                </div>
                                <div className="inputs-wrapper w-100">
                                    <input
                                        type="text"
                                        className={`w-100 ${errors.email ? "error-border" : ""}`}
                                        placeholder="Email"
                                        {...register("email")}
                                    />
                                    {errors.email && <p>{errors.email.message}</p>}
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