import React from 'react';
import Breadcrumb from '../components/Other/Breadcrumb';
import RegisterSection from '../components/Account/RegisterSection';

const Register: React.FC = () => {
    return (
        <div className="login-content">
            <div className="main">
                <Breadcrumb currentPage={"Register"} />
                <RegisterSection />
            </div>
        </div>
    )
}

export default Register;