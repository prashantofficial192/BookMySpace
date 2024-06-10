import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Turf.css';
import "./Tresponsive.css"

const turfList = [
    {
        id: 1,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipNLZu2bMMMttplNhJvnZUq0Z6e5f9q2yquhHqen=w426-h240-k-no",
        name: "City Sports Club",
        location: "Vadodara",
        sports: "Football, Cricket",
        ratings: 4.8
    },
    {
        id: 2,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipMGWJ9Y-Ij_F6bOowD6At6-ulhadAf3iKmbz2-h=w426-h240-k-no",
        name: "Turf Park",
        location: "Surat",
        sports: "Football, Tennis",
        ratings: 4.6
    },
    {
        id: 3,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipNvEkvvto-46Y5nXskBXmLjfTIrqBTWumY9pSKY=w408-h306-k-no",
        name: "Ballin Turf",
        location: "Vesu",
        sports: "Football, Basketball",
        ratings: 4.9
    }
];

const Turf = () => {
    const navigate = useNavigate();
    return (
        <div className="turf-section">
            <div className="turf-header">
                <h1 className="turf-title">Turf Parks</h1>
                <button className="view-all-button" onClick={() => navigate('/turf')}>View All</button>
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
