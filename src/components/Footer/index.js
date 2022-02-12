import React from 'react'

const Footer = () => {
    const getyear = new Date()
    return (
        <footer>
            <p>
                &copy; {getyear.getFullYear()} copyright - All Right Reserved by <a href="https://taskplanet.org">TaskPlanet.org</a>
            </p>
        </footer>
    )
}

export default Footer