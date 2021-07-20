import React from 'react';
import { Link } from 'react-router-dom';
import { IButtonsAndLink } from '../Categories/ButtonsAndLinkData/ButtonsAndLinkData';

interface IProps {
    title: string;
    buttons: IButtonsAndLink[];
}

const SectionHeader: React.FC<IProps> = ({ title, buttons }) => {
    return (
        <div className="section-header">
            <div className="left-side">
                {/* ======= Section title ======= */}
                <div className="section-title">
                    <h4>{title}</h4>
                </div>
            </div>
            <div className="right-side">
                {/* ======= Section buttons and link ======= */}
                <ul className="section-buttons-and-link">
                    {
                        buttons.map(item => (
                            <li key={item.id}>
                                <Link to={item.href}>
                                    {item.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default SectionHeader;