import React from 'react';
import Breadcrumb from '../components/Other/Breadcrumb';
import OurTeam from '../components/About/OurTeam/OurTeam';
import TeamBgImg from '../components/About/TeamBgImg/TeamBgImg';
import AwardsAndRecognition from '../components/About/AwardsAndRecognition/AwardsAndRecognition';

const About: React.FC = () => {
    return (
        <div className="about-content">
            <div className="main">
                <TeamBgImg />
                <Breadcrumb currentPage={"About"} />
                <OurTeam />
                <AwardsAndRecognition />
            </div>
        </div>
    )
}

export default About;