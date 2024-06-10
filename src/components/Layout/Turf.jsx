import React from 'react';
import './Turf.css';
import "./Tresponsive.css"

const turfList = [
    {
        id: 1,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipNLZu2bMMMttplNhJvnZUq0Z6e5f9q2yquhHqen=w426-h240-k-no",
        name: "City Sports Club",
        location: "Downtown",
        sports: "Football, Cricket",
        ratings: 4.8
    },
    {
        id: 2,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipNLZu2bMMMttplNhJvnZUq0Z6e5f9q2yquhHqen=w426-h240-k-no",
        name: "Greenfield Sports Complex",
        location: "Uptown",
        sports: "Football, Tennis",
        ratings: 4.6
    },
    {
        id: 3,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipNLZu2bMMMttplNhJvnZUq0Z6e5f9q2yquhHqen=w426-h240-k-no",
        name: "Elite Turf Arena",
        location: "Midtown",
        sports: "Football, Basketball",
        ratings: 4.9
    }
];

const Turf = () => {
    return (
        <div className="turf-section">
            <div className="turf-header">
                <h1 className="turf-title">Turf Fields</h1>
                <button className="view-all-button">View All</button>
            </div>
            <div className="turf-container">
                {turfList.map((turf) => (
                    <div key={turf.id} className="turf-card">
                        <img src={turf.bannerImage} alt={turf.name} className="turf-image" />
                        <div className="turf-details">
                            <h2 className="turf-name">{turf.name}</h2>
                            <p className="turf-location">Location: {turf.location}</p>
                            <p className="turf-sports">Sports: {turf.sports}</p>
                            <p className="turf-ratings">Rating: {turf.ratings}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Turf;
