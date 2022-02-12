import React, { useState } from 'react'
// import Input from '../../components/Input'
import Select from '../../components/Select';
import { categories } from '../../utils/cate_mock';
// import checkboxHandler from '../../utils/function/checkboxHandler';
import { location } from '../../utils/location_mock';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { durations } from '../../utils/duration_mock';
import Switch from '@mui/material/Switch';

const LeftSidebar = ({ onCategoryFilter, onLocationFilter, onWorkhomeFilter, onPartTimeFilter, onPriceFilter, onDurationFilter }) => {

    const [filter, setFilter] = useState({
        location: "",
        category: "",
        workHome: false,
        price: "",

    })
    const [price, setPrice] = useState(0);
    const handlepriceFilter = (e) => {
        onPriceFilter(e);
        setPrice(e)
    }
    const handleInput = (fields) => (e) => {
        setFilter({
            ...filter,
            [fields]: e.target.value || e.target.checked
        })
        console.log(e)
        switch (fields) {
            case "location":
                return onLocationFilter(e.target.value);
            case "category":
                return onCategoryFilter(e.target.value);
            case "workHome":
                return onWorkhomeFilter(e.target.checked);
            case "partTime":
                return onPartTimeFilter(e.target.checked);
            case "duration":
                return onDurationFilter(e.target.value);

            default:
                break;
        }
    }

    return (
        <>
            <div className="heading">
                <h2>Filter</h2>
            </div>
            {/* Category filter */}
            <div className="category_wrapper sidebar_element">
                <div className="title">
                    <h2>category</h2>
                </div>
                <div className="category">
                    <Select name="category" style={{
                        padding: "8px 10px",
                        width: "100%",
                        border: "1px solid #eee",
                        color: "#8A8A8A",
                        fontSize: "13px"
                    }}
                        options={categories.map((data) => data.category)}
                        onChange={handleInput("category")}
                    />
                </div>
            </div>
            {/* Locations filter */}
            <div className="location_wrapper sidebar_element">
                <div className="title">
                    <h2>location</h2>
                </div>
                <div className="location_field">
                    <Select name="location" style={{
                        padding: "8px 10px",
                        width: "100%",
                        border: "1px solid #eee",
                        color: "#8A8A8A",
                        fontSize: "13px"
                    }}
                        className="location"
                        options={location.map((data) => data.location)}
                        onChange={handleInput("location")}
                    />
                </div>
            </div>
            {/* Work from home */}
            <div className="workHome_wrapper">
                <h3>Work From Home</h3>
                <Switch onChange={handleInput("workHome")} name="workHome" />
            </div>
            {/* part time */}
            <div className="partTime_wrapper">
                <h3>Part-Time</h3>
                <Switch onChange={handleInput("partTime")} name="partTime" />
            </div>
            {/* Price filter */}
            <div className="price_wrapper sidebar_element">
                <div className="title">
                    <h2>Minimum monthly stipend (₹)</h2>
                </div>
                <div className="price_slider">
                    <Slider startPoint={1} onChange={handlepriceFilter} name="price" marks={{ 0: 0, 20: 20, 40: 40, 60: 60, 80: 80, 100: 100 }} step={20} />
                    <div className="range" style={{ marginTop: "31px" }}>
                        <strong>Price Range:</strong> ₹{price * 100}
                    </div>
                </div>
            </div>
            {/* Max durations filter */}
            <div className="durations_wrapper sidebar_element">
                <div className="title">
                    <h2>Max. Duration (months)</h2>
                </div>
                <div className="duration_field">
                    <Select name="durations" style={{
                        padding: "8px 10px",
                        width: "100%",
                        border: "1px solid #eee",
                        color: "#8A8A8A",
                        fontSize: "13px"
                    }} className="duration" options={durations.map((data) => data.durations)} onChange={handleInput("duration")} />
                </div>
            </div>
        </>
    )
}

export default LeftSidebar;