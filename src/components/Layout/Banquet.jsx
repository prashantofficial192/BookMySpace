import React from 'react';
import './Banquet.css';
import "./Bresponsive.css"

const banquetList = [
    {
        id: 1,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipMOV_5Qql-jJySzh6yyv8QVbbtKkFPL_YnLCdTn=w408-h306-k-no",
        name: "Grand Palace Banquet Hall",
        location: "Downtown",
        capacity: "500",
        ratings: 4.7
    },
    {
        id: 2,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipMOV_5Qql-jJySzh6yyv8QVbbtKkFPL_YnLCdTn=w408-h306-k-no",
        name: "Elegant Gardens Banquet",
        location: "Uptown",
        capacity: "300",
        ratings: 4.5
    },
    {
        id: 3,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipMOV_5Qql-jJySzh6yyv8QVbbtKkFPL_YnLCdTn=w408-h306-k-no",
        name: "Royal Palace Banquet",
        location: "Midtown",
        capacity: "400",
        ratings: 4.8
    }
];

const Banquet = () => {
    return (
        <div className="banquet-section">
            <div className="banquet-header">
                <h1 className="banquet-title">Banquet Halls</h1>
                <button className="view-all-button">View All</button>
            </div>
            <div className="banquet-container">
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
