import React, { useState } from 'react'
import JobLists from './jobLists';
import LeftSidebar from './leftSidebar';
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { jobData } from '../../utils/mock_data';

const JobPage = () => {
    const [show, setShow] = useState(false);
    // data
    const [data, setData] = useState(jobData)

    // on filter category
    const onCategoryFilter = (category) => {
        const job = jobData.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setData(job)
        if (category === "Select") {
            setData(jobData)
        }
    }
    // on filter location
    const onLocationFilter = (location) => {
        const job = jobData.filter(pd => pd.location.toLowerCase() === location.toLowerCase());
        setData(job)
        if (location === "Select") {
            setData(jobData)
        }
    }
    // on work home filter
    const onWorkhomeFilter = (workHome) => {
        const job = jobData.filter(pd => pd.office === workHome);
        setData(job)
        if (workHome === false) {
            setData(jobData)
        }
    }
    // on parttime filter
    const onPartTimeFilter = (partTime) => {
        const job = jobData.filter(pd => pd.partTime === partTime);
        setData(job)
        if (partTime === false) {
            setData(jobData)
        }
    }
    // on price filter
    const onPriceFilter = (price) => {
        const priceRange = price * 100;
        const job = jobData.filter(pd => pd.stippend >= priceRange);
        setData(job)
        if (priceRange <= 0) {
            setData(jobData)
        }
    }
    // on duration filter
    const onDurationFilter = (duration) => {
        const job = jobData.filter(pd => pd.duration.toLowerCase() === duration.toLowerCase());
        setData(job)
        if (duration === "Select") {
            setData(jobData)
        }
    }
    return (
        <div className='job_wrapper'>
            <div className="container">
                <div className="job_containers">
                    <div className={`leftSidebar ${show ? "active" : ''}`}>
                        <LeftSidebar onCategoryFilter={onCategoryFilter} onLocationFilter={onLocationFilter} onWorkhomeFilter={onWorkhomeFilter} onPartTimeFilter={onPartTimeFilter} onPriceFilter={onPriceFilter} onDurationFilter={onDurationFilter} />
                    </div>
                    {
                        show && <div className="backdrop" onClick={() => setShow(false)}></div>
                    }
                    <div className="job_lists">
                        {
                            data.map(item => (
                                <JobLists key={item._id} item={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="bar" onClick={() => setShow(true)}>
                <RiBarChartHorizontalLine />
            </div>
        </div>
    )
}

export default JobPage;