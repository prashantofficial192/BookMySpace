import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Restaurant.css';
import "./responsive.css"

const restaurants = [
    {
        id: 1,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipN-PgMDY-m5qZ2pmWMNB0qCJd82Uumf9RCrEmFT=w426-h240-k-no",
        name: "Unnati Restaurant",
        area: "Surat",
        ratings: 4.5
    },
    {
        id: 2,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipOZZmavACTtrbFmCuMA_6PObKXy0EmT3yvsWZEf=w533-h240-k-no",
        name: "GK's Restaurant",
        area: "Surat",
        ratings: 3.9
    },
    {
        id: 3,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipNXGIomsfAGejg9cjsAPqL6vqhKOuv6nN2Tur1i=w408-h315-k-no",
        name: "Tulsi Restaurant",
        area: "Navsari",
        ratings: 3.9
    }
];

const Restaurant = () => {
    const navigate = useNavigate();
    return (
        <div className="restaurant-section">
            <div className="restaurant-header">
                <h1 className="restaurant-title">Restaurants</h1>
                <button className="view-all-button" onClick={() => navigate('/restaurant')}>View All</button>
            </div>
            <div className="restaurant-container" onClick={() => navigate('/restaurant')}>
                {restaurants.map((restaurant) => (
                    <div key={restaurant.id} className="restaurant-card">
                        <img src={restaurant.bannerImage} alt={restaurant.name} className="restaurant-image" />
                        <div className="restaurant-details">
                            <h2 className="restaurant-name">{restaurant.name}</h2>
                            <p className="restaurant-area">{restaurant.area}</p>
                            <p className="restaurant-ratings">Rating: {restaurant.ratings}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Restaurant;
