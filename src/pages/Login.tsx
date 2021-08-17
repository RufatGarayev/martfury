import React from 'react';
import Breadcrumb from '../components/Other/Breadcrumb';
import LoginSection from '../components/Account/LoginSection';

const Login: React.FC = () => {
    return (
        <div className="login-content">
            <div className="main">
                <Breadcrumb currentPage={"Login"} />
                <LoginSection />
            </div>
        </div>
    )
}

export default Login;