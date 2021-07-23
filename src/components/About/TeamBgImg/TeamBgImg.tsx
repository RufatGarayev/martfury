import React from 'react';
import TeamImg from '../../../assets/img/about/team-bg/team.jpg';

interface IStyle {
    backgroundImage: string;
    backgroundSize: string;
    backgroundPosition: string;
    backgroundRepeat: string;
    height: string;
}

const TeamBgImg: React.FC = () => {
    const sectionStyle: IStyle = {
        backgroundImage: `url(${TeamImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "507px"
    };

    return (
        <section style={sectionStyle} id="team-bg-img">
        </section>
    )
}

export default TeamBgImg;