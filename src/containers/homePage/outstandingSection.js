import React from 'react';
import { MdSecurity } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import web from "../../assets/img/web.svg";

const OutstandingSection = () => {
    return (
        <>
            <div className="outstanding_wrapper">
                <div className="container">
                    <div className="outstanding_container">
                        <div className="heading">
                            <h2>outstanding core feature <br /> of this platform</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi praesentium illum at voluptate error nam quae vitae consequuntur culpa cumque?</p>
                        </div>
                        <div className="content">
                            <div className="left">
                                <div className="other_box">
                                    <CoreFeature icon={<MdSecurity style={{ marginBottom: "-2px" }} />} heading="High Securiy" para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi praesentium illum at voluptate error." />
                                    <CoreFeature icon={<FiSettings style={{ marginBottom: "-2px" }} />} heading="Withdrawal Support" para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi praesentium illum at voluptate error." />
                                </div>
                                <div className="other_box">
                                    <CoreFeature icon={<BiSupport style={{ marginBottom: "-2px" }} />} heading="24/7 Support" para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi praesentium illum at voluptate error." />
                                    <CoreFeature icon={<MdSecurity style={{ marginBottom: "-2px" }} />} heading="High Securiy" para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi praesentium illum at voluptate error." />
                                </div>
                            </div>
                            <div className="right">
                                <img src={web} alt="web" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OutstandingSection;

const CoreFeature = ({ icon, heading, para }) => {
    return (
        <div className="coreFeature_box">
            <div className="icon">
                <span>
                    {icon}
                </span>
                <h2>{heading}</h2>
            </div>
            <div className="desc">
                <p>{para}</p>
            </div>
        </div>
    )
}