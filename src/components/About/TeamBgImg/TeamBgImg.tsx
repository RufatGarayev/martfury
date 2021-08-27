import React from 'react';
import TeamImg from '../../../assets/img/about/team-bg/team.jpg';
import { ITeamBgImgStyle } from '../../../types/types';

const TeamBgImg: React.FC = () => {
    const sectionStyle: ITeamBgImgStyle = {
        backgroundImage: `url(${TeamImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        height: "507px"
    };

    return (
        <section style={sectionStyle} id="team-bg-img">
        </section>
    )
}

export default TeamBgImg;