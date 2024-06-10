import React, { useState } from 'react'
import "./RestaurantLayout.css"

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
    },
    {
        id: 4,
        bannerImage: "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
        name: "Hari Om Restaurant",
        area: "Udhna",
        ratings: 3.5
    },
    {
        id: 5,
        bannerImage: "https://b.zmtcdn.com/data/pictures/7/19697327/acabb86ffada5cf0b3538ddbb38046c2_featured_v2.jpg?output-format=webp",
        name: "Urban Punjab",
        area: "Vesu",
        ratings: 4.9
    },
    {
        id: 6,
        bannerImage: "https://b.zmtcdn.com/data/pictures/chains/4/18551944/251626ef48efd2bef966d266ed447e96_featured_v2.jpg?output-format=webp",
        name: "Coffe King",
        area: "Vadodara",
        ratings: 4.2
    },
    {
        id: 7,
        bannerImage: "https://b.zmtcdn.com/data/pictures/4/19630764/d90e65ef1acb3b2365d47b4ebd039619_featured_v2.jpg",
        name: "Spice Petals",
        area: "Ahemdabad",
        ratings: 4.5
    },
    {
        id: 8,
        bannerImage: "https://b.zmtcdn.com/data/pictures/4/20817784/3b7cbae4cf661e5f7af15dd34d7173c1_featured_v2.jpg",
        name: "Thyme & Whisk",
        area: "Varaccha",
        ratings: 4.8
    },
    {
        id: 9,
        bannerImage: "https://b.zmtcdn.com/data/pictures/7/19915997/8c852ff5871a4002549fa7b951f5c24d_featured_v2.jpg",
        name: "7 Colours",
        area: "Vapi",
        ratings: 3.1
    },
    {
        id: 10,
        bannerImage: "https://b.zmtcdn.com/data/pictures/7/20979557/3f6b8e33496074c26c16364d91b97b44_featured_v2.jpg",
        name: "Unwind Cafe",
        area: "Bardoli",
        ratings: 4.5
    },
    {
        id: 11,
        bannerImage: "https://b.zmtcdn.com/data/pictures/0/18630060/7634239f05ff82ac535f73f8b46d852d_featured_v2.jpg",
        name: "K'S Characol",
        area: "Valsad",
        ratings: 4.8
    },
    {
        id: 12,
        bannerImage: "https://b.zmtcdn.com/data/pictures/7/20652117/b8013ab4d22ac24bfbd7bcecaf8e697b_featured_v2.jpg",
        name: "Brokers Cafe",
        area: "Kim",
        ratings: 4.2
    }
];

const RestaurantLayout = () => {

    const [area, setArea] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

    const handleAreaChange = (e) => {
        setArea(e.target.value);
    };

    const handleSearch = () => {
        if (area === '') {
            setFilteredRestaurants(restaurants);
        } else {
            const filtered = restaurants.filter(restaurant => restaurant.area === area);
            setFilteredRestaurants(filtered);
        }
    };


    return (
        <>
            <div className="select-area-container">
                <div className="select-area">
                    <label htmlFor="area">Select Area:</label>
                    <select id="area" value={area} onChange={handleAreaChange} className="select-area-dropdown">
                        <option value="">Select an area</option>
                        <option value="Surat">Surat</option>
                        <option value="Navsari">Navsari</option>
                        <option value="Udhna">Udhna</option>
                        <option value="Vesu">Vesu</option>
                        <option value="Bardoli">Bardoli</option>
                        <option value="Kim">Kim</option>
                        <option value="Ahemdabad">Ahemdabad</option>
                        <option value="Vapi">Vapi</option>
                        <option value="Vadodara">Vadodara</option>
                        <option value="Varaccha">Varaccha</option>
                    </select>
                </div>
                <button onClick={handleSearch} className="search-button">Search</button>
            </div>
            <div className="restaurant-section">
                <div className="restaurant-container">
                    {filteredRestaurants.map((restaurant) => (
                        <div key={restaurant.id} className="restaurant-card">
                            <img src={restaurant.bannerImage} alt={restaurant.name} className="restaurant-image" />
                            <div className="restaurant-details">
                                <h2 className="restaurant-name">{restaurant.name}</h2>
                                <p className="restaurant-area">{restaurant.area}</p>
                                <p className="restaurant-ratings">Rating: {restaurant.ratings}</p>
                            </div>
                            <button className="restaurant-book-now-button">Book Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}

export default RestaurantLayout
