import React, { useState } from 'react'
import "./BanquetLayout.css"


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
    {
        id: 4,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipOaNKz3eeGwMadntpBEifTbELWU5A61mJyRXmI5=w408-h306-k-no",
        name: "SOLITAIRE BANQUETS",
        location: "Navsari",
        capacity: "500",
        ratings: 4.7
    },
    {
        id: 5,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipMmrqU0K-rOqrb8TRPu0Z_OzWAORAa1K0kLHZo=w408-h271-k-no",
        name: "Lily the Banquet",
        location: "Ahmedabad",
        capacity: "800",
        ratings: 4.5
    },
    {
        id: 6,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipNkN4kZYGtGMgQ2-ie31_QAFOoF-c4W7WwpG8Ay=w408-h270-k-no",
        name: "Privya Banquet Hall",
        location: "Surat",
        capacity: "400",
        ratings: 3.8
    },
    {
        id: 7,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipPP8afn876_sVI27LYZM8_C9IADSnrUtAMBBVms=w408-h272-k-no",
        name: "Rangat Banquet Hall",
        location: "Valsad",
        capacity: "500",
        ratings: 4.7
    },
    {
        id: 8,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipP_PM1rNSi1MvUQeFWllx92AxQriraxDPH6BaxG=w408-h271-k-no",
        name: "White Pearl Samprati",
        location: "Valsad",
        capacity: "1000",
        ratings: 4.5
    },
    {
        id: 9,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipNTC2bQnJf_dpO_kNZqvlwuBWC9lJiGbEKFhSlc=w408-h272-k-no",
        name: "TGF Restaurant & Banquet Hall",
        location: "Ahmedabad",
        capacity: "400",
        ratings: 4.8
    },
    {
        id: 10,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipPJedwLTZ94ZCluO8nPhoth77qwE1Vl6ectMBNK=w535-h240-k-no",
        name: "La Victoria Banquet and Rooms",
        location: "Surat",
        capacity: "500",
        ratings: 4.7
    },
    {
        id: 11,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipNbpy_oizXGuOvTdAnTEmLUK6F48MTBWLpIKba_=w408-h306-k-no",
        name: "Elegant Gardens Banquet",
        location: "Navsari",
        capacity: "300",
        ratings: 4.5
    },
    {
        id: 12,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipNNUj0tOg5DT0N-E2RYpTHovPKGGV9bB-KE6otu=w408-h306-k-no",
        name: "Royal Palace Banquet",
        location: "Surat",
        capacity: "900",
        ratings: 4.8
    }
];

const Banquet = () => {
    const [capacity, setCapacity] = useState(0);
    const [ratings, setRatings] = useState(0);
    const [filteredBanquetList, setFilteredBanquetList] = useState(banquetList);

    const handleSearch = () => {
        const filtered = banquetList.filter(banquet => {
            return (
                (capacity === 0 || banquet.capacity >= capacity) &&
                (ratings === 0 || banquet.ratings >= ratings)
            );
        });
        setFilteredBanquetList(filtered);
    };
    return (
        <>
            <div className="filter-section">
                <div className="filter-container">
                    <label htmlFor="capacity">Capacity:</label>
                    <input
                        type="number"
                        id="capacity"
                        value={capacity}
                        onChange={(e) => setCapacity(parseInt(e.target.value))}
                        min="0"
                        placeholder="Enter minimum capacity"
                    />
                </div>
                <div className="filter-container">
                    <label htmlFor="ratings">Ratings:</label>
                    <select
                        id="ratings"
                        value={ratings}
                        onChange={(e) => setRatings(parseFloat(e.target.value))}
                    >
                        <option value="0">All Ratings</option>
                        <option value="4">4 & above</option>
                        <option value="4.5">4.5 & above</option>
                        <option value="4.7">4.7 & above</option>
                        <option value="4.8">4.8 & above</option>
                    </select>
                </div>
                <button onClick={handleSearch} className="search-button-2">Search</button>
            </div>
            <div className="banquet-section">
                <div className="banquet-container">
                    {filteredBanquetList.map((banquet) => (
                        <div key={banquet.id} className="banquet-card">
                            <img src={banquet.bannerImage} alt={banquet.name} className="banquet-image" />
                            <div className="banquet-details">
                                <h2 className="banquet-name">{banquet.name}</h2>
                                <p className="banquet-location">{banquet.location}</p>
                                <p className="banquet-capacity">Capacity: {banquet.capacity} guests</p>
                                <p className="banquet-ratings">Rating: {banquet.ratings}</p>
                            </div>
                            <button className="book-now-button">Book Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Banquet
