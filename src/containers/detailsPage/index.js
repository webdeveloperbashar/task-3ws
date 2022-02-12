import React from 'react';
import { useParams } from "react-router-dom";
import { FiHome, FiPlayCircle, FiCalendar, FiUsers } from "react-icons/fi";
import { FaMoneyCheckAlt, FaHourglassHalf } from "react-icons/fa";
import logo from "../../assets/img/companyLogo.jpg";
import { jobData } from "../../utils/mock_data";
const DetailsPage = () => {
    const { id } = useParams();
    const findJob = jobData.find((pd) => pd._id === id);
    return (
        <div className='details_wrapper'>
            <div className="container">
                <div className="details_container">
                    <div className="jobTitle">
                        <h2>Frontend Development work from home job/internship at {findJob.companyName}</h2>
                    </div>
                    <div className='jobDetails_wrapper'>
                        <div className="job_heading">
                            <div className="job_name_company">
                                <h2>{findJob.jobTitle}</h2>
                                <p>{findJob.companyName}</p>
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
                                    {findJob.office === true && "Work From Home"}
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
                                            <p>{findJob.starDate}</p>
                                        </div>
                                    </div>
                                    <div className="stipend_text">
                                        <div className="item_heading">
                                            <FiCalendar />
                                            <p>duration</p>
                                        </div>
                                        <div className="item_body">
                                            <p>{findJob.duration}</p>
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
                                            <p>₹ {findJob.stippend}/month</p>
                                        </div>
                                    </div>
                                    <div className="stipend_text">
                                        <div className="item_heading">
                                            <FaHourglassHalf />
                                            <p>apply by</p>
                                        </div>
                                        <div className="item_body">
                                            <p>{findJob.apply}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="total_applicants">
                                <span>
                                    <FiUsers />
                                </span>
                                <p>{findJob.applyCount} Applicants</p>
                            </div>
                        </div>
                        <div className="about_company">
                            <h2>about Triple w solutions</h2>
                            <div className="description text_container">
                                <p>
                                    Triple W Solutions is an IT-based firm. We provide services such as website development, app development, and business process consultation. Triple W Solutions has been in the business of IT technology and services for the last 5 years and has completed more than 50 projects globally.
                                </p>
                            </div>
                        </div>
                        <div className="about_work">
                            <h2>About the work from home job/internship</h2>
                            <div className="description text_container">
                                <ol>
                                    <li>
                                        Working on website development (MERN based)
                                    </li>
                                    <li>
                                        Completing the assigned day-to-day tasks
                                    </li>
                                    <li>
                                        Coordinating with other team members for the same
                                    </li>
                                    <li>
                                        Working on resolving bugs
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="skills">
                            <h2>Skill(s) required</h2>
                            <div className="skills_list">
                                <span>MongoDB</span>
                                <span>ReactJS</span>
                                <span>Redux</span>
                                <span>Angular</span>
                            </div>
                        </div>
                        <div className="who_apply">
                            <h2>Who can apply</h2>
                            <div className="description text_container">
                                <ol>
                                    <li>
                                        are available for the work from home job/internship
                                    </li>
                                    <li>
                                        can start the work from home job/internship between 7th Feb'22 and 14th Mar'22
                                    </li>
                                    <li>
                                        are available for duration of 3 months
                                    </li>
                                    <li>
                                        have relevant skills and interests
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="number_of_vacancy">
                            <h2>Number of openings</h2>
                            <h3>{findJob.vacancy}</h3>
                        </div>
                        <div className="apply_button">
                            <button type='button'>apply now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsPage;