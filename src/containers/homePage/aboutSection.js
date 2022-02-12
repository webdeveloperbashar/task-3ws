import React from 'react';
import { BiRightArrow } from "react-icons/bi";
import about from "../../assets/img/about.png";

const AboutSection = () => {
    return (
        <>
            <div className="about_section">
                <div className="container">
                    <div className="about_container">
                        <div className="about_left">
                            <p className='heading_p'>about the platform</p>
                            <h2>Best and trusted platform <br /> for earning on online</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius amet officiis enim, asperiores nostrum. Qui laboriosam perspiciatis ullam ipsa incidunt, in facere perferendis ea aperiam, laudantium explicabo quis fugiat.</p>
                            <div className="key_Points">
                                <ul>
                                    <li>
                                        <span><BiRightArrow style={{marginBottom: "-2px"}} /></span> ipsum dolor sit amet consectetur adipisicing elit
                                    </li>
                                    <li>
                                        <span><BiRightArrow style={{marginBottom: "-2px"}} /></span> Lorem ipsum dolor sit amet consectetur adipisicing
                                    </li>
                                    <li>
                                        <span><BiRightArrow style={{marginBottom: "-2px"}} /></span> Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="about_right">
                            <img src={about} alt="about" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection;