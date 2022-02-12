import React from 'react';
import { FaMoneyBillAlt, FaUsers } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";
import { GrTasks } from "react-icons/gr";
import { FiRotateCcw } from "react-icons/fi";

const FeatureSections = () => {
    return (
        <>
            <div className="feature_wrapper">
                <div className="container">
                    <div className="feature_container">
                        <div className="heading">
                            <h2>many features are available <br /> in the platform</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores veritatis harum libero cupiditate ex quis voluptate distinctio tempora nobis accusantium.
                            </p>
                        </div>
                        <div className="content">
                            <FeatureBox icon={<FaMoneyBillAlt />} heading="Earn By Doing Tasks" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores veritatis harum libero cupiditate ex quis voluptate distinctio" />
                            <FeatureBox icon={<GiReturnArrow />} heading="5-Level Referral" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores veritatis harum libero cupiditate ex quis voluptate distinctio" />
                            <FeatureBox icon={<FaUsers />} heading="Earn Commisions From Team" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores veritatis harum libero cupiditate ex quis voluptate distinctio" />
                            <FeatureBox icon={<MdAttachMoney />} heading="Minimum Withdrawal ₹100" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores veritatis harum libero cupiditate ex quis voluptate distinctio" />
                            <FeatureBox icon={<GrTasks />} heading="Create Your Task" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores veritatis harum libero cupiditate ex quis voluptate distinctio" />
                            <FeatureBox icon={<FiRotateCcw />} heading="Earn Passive Income" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores veritatis harum libero cupiditate ex quis voluptate distinctio" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureSections;

const FeatureBox = ({ icon, heading, para }) => {
    return (
        <div className="feature_box">
            <div className="icon">
                {icon}
            </div>
            <div className="desc">
                <h2>{heading}</h2>
                <p>{para}</p>
            </div>
        </div>
    )
}