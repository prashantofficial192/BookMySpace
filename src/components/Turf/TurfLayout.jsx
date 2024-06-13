import React, { useState } from 'react';
import "./TurfLayout.css";
import TurfBooking from '../Turf Booking/TurfBooking';

// List of turfs with details
const turfList1 = [
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
    },
    {
        id: 4,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipMdTCobF92o3kmRczFGp4hbcMunS2wyZzSz84Q=w408-h544-k-no",
        name: "Smashup Turf",
        location: "Navsari",
        sports: "Football, Cricket",
        ratings: 4.8
    },
    {
        id: 5,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipO8E-DT4dX5PzNUOSxknlKxGPatCcKCPBkL0CO1=w408-h297-k-no",
        name: "Hit Wicket Turf & Sports Club",
        location: "Ahemadabad",
        sports: "Football, Tennis",
        ratings: 4.6
    },
    {
        id: 6,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipOexU7Mfs5Ev6TOLBMi4I8cFEWyTkd-7lYQHf0M=w408-h543-k-no",
        name: "HeminOm Turf",
        location: "Vadodara",
        sports: "Football, Basketball",
        ratings: 4.9
    },
    {
        id: 7,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipP6JUxahnA0jmnjrHW3HqoMgsFEGSqMnamwJPdk=w533-h240-k-no",
        name: "Backyard sports park",
        location: "Surat",
        sports: "Football, Cricket",
        ratings: 4.8
    },
    {
        id: 8,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipPXtE01uyVUKywE7C4omiWmaue1KP8jKuGf2dYI=w426-h240-k-no",
        name: "Sportsspark Adajan TURF",
        location: "Adajan",
        sports: "Football, Tennis",
        ratings: 4.6
    },
    {
        id: 9,
        bannerImage: "https://lh5.googleusercontent.com/p/AF1QipPwi1T4t1RM_mL49tKXcsjxUYniWRKnjNc-LyeQ=w408-h306-k-no",
        name: "Kosmos Turf",
        location: "Navsari",
        sports: "Football, Basketball",
        ratings: 4.9
    }
];


const TurfLayout = () => {
    // State variables to manage the component's state
    const [selectedTurf, setSelectedTurf] = useState(null);
    const [selectedSport, setSelectedSport] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [filteredTurfs, setFilteredTurfs] = useState(turfList1);
    const [showBooking, setShowBooking] = useState(false);

    // Function to handle the search action
    const handleSearch = () => {
        const filtered = turfList1.filter(turf => {
            return (
                (selectedSport === '' || turf.sports.includes(selectedSport)) &&
                (selectedCity === '' || turf.location === selectedCity)
            );
        });
        // Update the filtered turf list based on selected sport and city
        setFilteredTurfs(filtered);
    };

    // Function to handle the "Book Now" button click
    const handleBookNow = (sport, city, turf) => {
        setSelectedTurf(turf);
        setSelectedSport(sport);
        setSelectedCity(city);
        setShowBooking(true);
    };

    // Function to close the booking modal
    const handleCloseBooking = () => {
        setShowBooking(false);
    };

    return (
        <>
            <div className="turf-filter-section" id='animation'>
                <div className="turf-filter-container">
                    <label htmlFor="sports" className="turf-filter-label">Sports:</label>
                    <select
                        id="sports"
                        value={selectedSport}
                        onChange={(e) => setSelectedSport(e.target.value)}
                        className="turf-filter-select"
                    >
                        <option value="">All Sports</option>
                        <option value="Football">Football</option>
                        <option value="Cricket">Cricket</option>
                        <option value="Tennis">Tennis</option>
                        <option value="Basketball">Basketball</option>
                    </select>
                </div>
                <div className="turf-filter-container">
                    <label htmlFor="city" className="turf-filter-label">City:</label>
                    <select
                        id="city"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="turf-filter-select"
                    >
                        <option value="">All Cities</option>
                        <option value="Surat">Surat</option>
                        <option value="Vesu">Vesu</option>
                        <option value="Navsari">Navsari</option>
                        <option value="Ahemadabad">Ahemadabad</option>
                        <option value="Vadodara">Vadodara</option>
                        <option value="Adajan">Adajan</option>
                    </select>
                </div>
                <button onClick={handleSearch} className="turf-search-button">Search</button>
            </div>

            <div className="turf-section" id='animation'>
                <div className="turf-container">
                    {filteredTurfs.length > 0 ? (
                        filteredTurfs.map((turf) => (
                            <div key={turf.id} className="turf-card">
                                <img src={turf.bannerImage} alt={turf.name} className="turf-image" />
                                <div className="turf-details">
                                    <h2 className="turf-name">{turf.name}</h2>
                                    <p className="turf-location">{turf.location}</p>
                                    <p className="turf-sports">{turf.sports}</p>
                                    <p className="turf-ratings">Rating: {turf.ratings}</p>
                                </div>
                                <button
                                    className="turf-book-now-button"
                                    onClick={() => handleBookNow(turf.sports, turf.location, turf)}
                                >
                                    Book Now
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="no-turf-message">Details Not Found</p>
                    )}
                </div>
            </div>

            {showBooking && (
                <div className="turf-booking-modal">
                    <TurfBooking
                        selectedTurf={selectedTurf}
                        selectedSport={selectedSport}
                        selectedCity={selectedCity}
                        onClose={handleCloseBooking}
                    />
                </div>
            )}
        </>
    );
};

export default TurfLayout;