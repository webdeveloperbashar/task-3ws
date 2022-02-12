import React from 'react';
import logo from "../../assets/img/companyLogo.jpg";
import { Link } from 'react-router-dom';
import { FiHome, FiPlayCircle, FiCalendar } from "react-icons/fi";
import { FaMoneyCheckAlt, FaHourglassHalf } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const JobLists = ({ item }) => {
    return (
        <div className='joblist_wrapper'>
            <div className="job_heading">
                <div className="job_name_company">
                    <Link target="_blank" to={`/details/${item._id}`}>
                        <h2>{item.jobTitle}</h2>
                    </Link>
                    <p>{item.companyName}</p>
                </div>
                <div className="company_name">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className="job_body">
                <div className="office_names">
                    <span>
                        <FiHome />
                    </span>
                    <p>
                        {item.office === true && "Work From Home"}
                    </p>
                </div>
                <div className="intership_details_container">
                    <div className="details_row">
                        <div className="stipend_text">
                            <div className="item_heading">
                                <FiPlayCircle />
                                <p>start date</p>
                            </div>
                            <div className="item_body">
                                <p>{item.starDate}</p>
                            </div>
                        </div>
                        <div className="stipend_text">
                            <div className="item_heading">
                                <FiCalendar />
                                <p>duration</p>
                            </div>
                            <div className="item_body">
                                <p>{item.duration}</p>
                            </div>
                        </div>
                    </div>
                    <div className="details_row">
                        <div className="stipend_text">
                            <div className="item_heading">
                                <FaMoneyCheckAlt />
                                <p>stipend</p>
                            </div>
                            <div className="item_body">
                                <p>₹ {item.stippend}/month</p>
                            </div>
                        </div>
                        <div className="stipend_text">
                            <div className="item_heading">
                                <FaHourglassHalf />
                                <p>apply by</p>
                            </div>
                            <div className="item_body">
                                <p>{item.apply}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="job_footer">
                <div className="tags_container">
                    <span>
                        internship
                    </span>
                    {item.partTime === true && <span>Part Time Allow</span>}
                </div>
                <div className="view_button">
                    <Link target="_blank" to={`/details/${item._id}`}>
                        view details <MdKeyboardArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default JobLists;