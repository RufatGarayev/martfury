import React from 'react';
import { Link } from 'react-router-dom';

const FooterMiddle: React.FC = () => {
    return (
        <div className="footer-middle">
            <div className="footer-middle-links">
                <div className="links">
                    <ul className="link-item">
                        <li><h6>Consumer Electrics:</h6></li>
                        <li><Link to="#/">Air Conditioners</Link></li>
                        <li><Link to="#/">Audios & Theaters</Link></li>
                        <li><Link to="#/">Car Electronics</Link></li>
                        <li><Link to="#/">Office Electronics</Link></li>
                        <li><Link to="#/">TV Televisions</Link></li>
                        <li><Link to="#/">Washing Machines</Link></li>
                    </ul>
                    <ul className="link-item">
                        <li><h6>Clothing & Apparel:</h6></li>
                        <li><Link to="#/">Printers</Link></li>
                        <li><Link to="#/">Scanners</Link></li>
                        <li><Link to="#/">Store & Business</Link></li>
                        <li><Link to="#/">4K Ultra HD TVs</Link></li>
                        <li><Link to="#/">LED TVs</Link></li>
                        <li><Link to="#/">OLED TVs</Link></li>
                        <li><Link to="#/">Projectors</Link></li>
                    </ul>
                    <ul className="link-item">
                        <li><h6>Home, Garden & Kitchen:</h6></li>
                        <li><Link to="#/">Cookware</Link></li>
                        <li><Link to="#/">Decoration</Link></li>
                        <li><Link to="#/">Furniture</Link></li>
                        <li><Link to="#/">Garden Tools</Link></li>
                        <li><Link to="#/">Garden Equipments</Link></li>
                        <li><Link to="#/">Powers And Hand Tools</Link></li>
                        <li><Link to="#/">Utensil & Gadget</Link></li>
                    </ul>
                    <ul className="link-item">
                        <li><h6>Health & Beauty:</h6></li>
                        <li><Link to="#/">Hair Care</Link></li>
                        <li><Link to="#/">Decoration</Link></li>
                        <li><Link to="#/">Makeup</Link></li>
                        <li><Link to="#/">Body Shower</Link></li>
                        <li><Link to="#/">Skin Care</Link></li>
                        <li><Link to="#/">Cologine</Link></li>
                        <li><Link to="#/">Perfume</Link></li>
                    </ul>
                    <ul className="link-item">
                        <li><h6>Yewelry & Watches:</h6></li>
                        <li><Link to="#/">Necklace</Link></li>
                        <li><Link to="#/">Pendant</Link></li>
                        <li><Link to="#/">Diamond Ring</Link></li>
                        <li><Link to="#/">Sliver Earing</Link></li>
                        <li><Link to="#/">Leather Watcher</Link></li>
                        <li><Link to="#/">Gucci</Link></li>
                    </ul>
                    <ul className="link-item">
                        <li><h6>Computer & Technologies:</h6></li>
                        <li><Link to="#/">Desktop PC</Link></li>
                        <li><Link to="#/">Laptop</Link></li>
                        <li><Link to="#/">Smartphones</Link></li>
                        <li><Link to="#/">Tablet</Link></li>
                        <li><Link to="#/">Game Controller</Link></li>
                        <li><Link to="#/">Audio & Video</Link></li>
                        <li><Link to="#/">Wireless Speaker</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default FooterMiddle;