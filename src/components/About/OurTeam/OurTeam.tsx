import React from 'react';
import { TeamData } from './TeamData';
import { AiOutlineTwitter } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { RiLinkedinFill } from 'react-icons/ri';
import { Row, Col } from 'react-bootstrap';

const OurTeam: React.FC = () => {
    return (
        <section id="our-team">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="section-title">
                            <h2>Meet Our Leaders</h2>
                        </div>
                    </div>
                </div>
                <Row>
                    {
                        TeamData.map(item => (
                            <Col key={item.id} lg={3} md={4} sm={6} xs={6}>
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
                            </Col>
                        ))
                    }

                    <Col lg={3} md={4} sm={6} xs={6}>
                        <div className="become-member-link">
                            <a href="#/">
                                Become <br />
                                Member in <br />
                                Team
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default OurTeam;