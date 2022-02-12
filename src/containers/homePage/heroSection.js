import React from 'react'
import job from "../../assets/img/hero.png";
import { FaShoppingCart } from "react-icons/fa";
const HeroSection = () => {
    return (
        <>
            <div className="hero_section">
                <div className="container">
                    <div className="hero_container">
                        <div className="left_content">
                            <h2>A PLATFORM FOR ONLINE <br /> EARNERS</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo earum cumque sit <br /> possimus voluptate nemo nihil vitae amet in cupiditate!</p>
                            <div className="button">
                                <button type='button'> <FaShoppingCart style={{ marginBottom: "-1px", marginRight: "5px" }} /> order now</button>
                            </div>
                        </div>
                        <div className="right_content">
                            <img src={job} alt="hero_image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection;