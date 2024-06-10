import React from 'react';
import './Restaurant.css';
import "./responsive.css"

const restaurants = [
    {
        id: 1,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipN-PgMDY-m5qZ2pmWMNB0qCJd82Uumf9RCrEmFT=w426-h240-k-no",
        name: "The Gourmet Kitchen",
        area: "Downtown",
        ratings: 4.5
    },
    {
        id: 2,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipN-PgMDY-m5qZ2pmWMNB0qCJd82Uumf9RCrEmFT=w426-h240-k-no",
        name: "Sushi Paradise",
        area: "Uptown",
        ratings: 4.8
    },
    {
        id: 3,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipN-PgMDY-m5qZ2pmWMNB0qCJd82Uumf9RCrEmFT=w426-h240-k-no",
        name: "Spice Symphony",
        area: "Midtown",
        ratings: 4.2
    }
];

const Restaurant = () => {
    return (
        <div className="restaurant-section">
            <div className="restaurant-header">
                <h1 className="restaurant-title">Restaurants</h1>
                <button className="view-all-button">View All</button>
            </div>
            <div className="restaurant-container">
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
