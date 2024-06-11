import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Banquet.css';
import "./Bresponsive.css"

const banquetList = [
    {
        id: 1,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipMOV_5Qql-jJySzh6yyv8QVbbtKkFPL_YnLCdTn=w408-h306-k-no",
        name: "Grand Palace Banquet Hall",
        location: "Vadodara",
        capacity: "500",
        ratings: 4.7
    },
    {
        id: 2,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipNyi9rBGEOrNAt_CysfzsWad1WtAE5KHTZjaJSw=w426-h240-k-no",
        name: "Neon-The Disc",
        location: "Vesu",
        capacity: "300",
        ratings: 4.5
    },
    {
        id: 3,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipOZl-4LWEpzsfbWNvFi7cKf6gqrYuldky3l3qfy=w408-h306-k-no",
        name: "Seasons Banquets Hall",
        location: "Surat",
        capacity: "400",
        ratings: 4.8
    },
];

const Banquet = () => {

    const navigate = useNavigate();

    return (
        <div className="banquet-section">
            <div className="banquet-header">
                <h1 className="banquet-title">Banquet Halls</h1>
                <button className="view-all-button" onClick={() => navigate('/banquet')}>View All</button>
            </div>
            <div className="banquet-container" onClick={() => navigate('/banquet')}>
                {banquetList.map((banquet) => (
                    <div key={banquet.id} className="banquet-card">
                        <img src={banquet.bannerImage} alt={banquet.name} className="banquet-image" />
                        <div className="banquet-details">
                            <h2 className="banquet-name">{banquet.name}</h2>
                            <p className="banquet-location">Location: {banquet.location}</p>
                            <p className="banquet-capacity">Capacity: {banquet.capacity} guests</p>
                            <p className="banquet-ratings">Rating: {banquet.ratings}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Banquet;
