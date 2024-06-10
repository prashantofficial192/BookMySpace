import React, { useState } from 'react';
import './Search.css';

const SelectArea = () => {
    const [area, setArea] = useState('');
    const [restaurant, setRestaurant] = useState('');

    const handleAreaChange = (e) => {
        setArea(e.target.value);
    };

    const handleRestaurantChange = (e) => {
        setRestaurant(e.target.value);
    };

    const handleSearch = () => {
        alert(`Searching for ${restaurant} in ${area}`);
    };

    return (
        <div className="select-area-container">
            <div className="select-area">
                <label htmlFor="area">Select Area:</label>
                <select id="area" value={area} onChange={handleAreaChange} className="select-area-dropdown">
                    <option value="" disabled>Select an area</option>
                    <option value="Downtown">Downtown</option>
                    <option value="Uptown">Uptown</option>
                    <option value="Suburbs">Suburbs</option>
                </select>
            </div>
            <button onClick={handleSearch} className="search-button">Search</button>
        </div>
    );
};

export default SelectArea;
