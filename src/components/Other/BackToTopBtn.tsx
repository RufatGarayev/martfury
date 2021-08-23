import React, { useState } from 'react';
import { VscArrowUp } from 'react-icons/vsc';

const BackToTopBtn: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);

    window.addEventListener("scroll", function (this: Window, e: Event): void {
        if (window.pageYOffset > 500) {
            setShow(true);
        } else {
            setShow(false);
        }
    });

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        window[`scrollTo`]({ top: 0 });
    };

    return (
        <div id="back-to-top-btn" className={show ? "show-back-to-top-btn" : ""}>
            <button type="button" onClick={handleClick}>
                <VscArrowUp />
            </button>
        </div>
    )
};

export default BackToTopBtn;