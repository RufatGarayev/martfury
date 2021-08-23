import React from 'react';
import { Link } from "react-router-dom";
import OurTeam from '../components/About/OurTeam/OurTeam';
import TeamBgImg from '../components/About/TeamBgImg/TeamBgImg';
import AwardsAndRecognition from '../components/About/AwardsAndRecognition/AwardsAndRecognition';

const About: React.FC = () => {
    return (
        <div className="about-content">
            <div className="main">
                {/* ===== team bg-img ===== */}
                <TeamBgImg />

                {/* ===== breadcrumb ===== */}
                <section id="breadcrumb">
                    <div className="container">
                        <ul className="breadcrumb-content d-flex m-0 p-0">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <span>About</span>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* ===== content ===== */}
                <OurTeam />
                <AwardsAndRecognition />
            </div>
        </div>
    )
}

export default About;