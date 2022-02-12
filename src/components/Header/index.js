import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <h2>3WS</h2>
                    </div>
                    <div className="menu">
                        <ul>
                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/jobs">
                                    Jobs
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header