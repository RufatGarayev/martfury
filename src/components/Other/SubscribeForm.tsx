import React from 'react';

const SubscribeForm: React.FC = () => {
    return (
        <div className="subscribe-form">
            <form className="d-flex">
                <input type="text" placeholder="Email Address" />
                <input type="submit" value="Subscribe" />
            </form>
        </div>
    )
};

export default SubscribeForm;