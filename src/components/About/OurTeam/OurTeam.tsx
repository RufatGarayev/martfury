import React from 'react';
import { TeamData } from './TeamData';
import { AiOutlineTwitter } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { RiLinkedinFill } from 'react-icons/ri';

const OurTeam: React.FC = () => {
    return (
        <section id="our-team">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        {/* ======= Title ======= */}
                        <div className="section-title">
                            <h2>Meet Our Leaders</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        TeamData.map(item => (
                            <div key={item.id} className="col-lg-3">
                                {/* ======= Team item ======= */}
                                <div className="team-item">
                                    <div className="item-front">
                                        <div className="item-img">
                                            <img src={item.img} alt={item.name} />
                                        </div>
                                    </div>
                                    <div className="item-back">
                                        <div className="item-info">
                                            <h5>{item.name}</h5>
                                            <p>{item.position}</p>
                                            <ul className="social-media m-0 p-0 d-flex justify-content-between">
                                                <li>
                                                    <a href={item.twitter}><AiOutlineTwitter /></a>
                                                </li>
                                                <li>
                                                    <a href={item.facebook}><GrFacebookOption /></a>
                                                </li>
                                                <li>
                                                    <a href={item.linkedin}><RiLinkedinFill /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    <div className="col-lg-3">
                        {/* ======= Become Member - link ======= */}
                        <div className="become-member-link">
                            <a href="#/">
                                Become <br />
                                Member in <br />
                                Team
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurTeam;