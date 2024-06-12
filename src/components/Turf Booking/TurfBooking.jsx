import React, { useState } from 'react';
import './TurfBooking.css';

const TurfBooking = ({ selectedSport, selectedCity, selectedTurf, onClose }) => {
    const [turf, setTurf] = useState(selectedTurf);
    const [sport, setSport] = useState(selectedSport);
    const [city, setCity] = useState(selectedCity);
    const [customerName, setCustomerName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [hours, setHours] = useState(1);
    const [date, setDate] = useState('');
    const chargePerHour = 500;
    const totalCharges = hours * chargePerHour;

    const handleBooking = () => {
        const bookingDetails = {
            type: 'turf',
            turfName: turf.name,
            sport,
            city,
            customerName,
            mobileNumber,
            hours,
            totalCharges,
            date
        };

        const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];

        // Check if the turf is already booked on the selected date
        const isTurfAvailable = !storedBookings.some(
            booking => booking.type === 'turf' && booking.date === date && booking.sport === sport && booking.city === city
        );

        if (isTurfAvailable) {
            storedBookings.push(bookingDetails);
            localStorage.setItem('bookings', JSON.stringify(storedBookings));
            console.log('Booking Details:', bookingDetails);
            alert(`Booking confirmed! Total Charges: ₹${totalCharges}`);
            onClose();
        } else {
            alert('Turf is not available at the selected date');
        }
    };

    return (
        <div className="turf-booking-container1">
            <h2 className="turf-booking-title">Book <span>{turf.name}</span></h2>
            <div className="turf-booking-form">
                <div className="turf-booking-field">
                    <label htmlFor="sports" className="turf-booking-label">Sports:</label>
                    <select
                        id="sports"
                        value={sport}
                        onChange={(e) => setSport(e.target.value)}
                        className="turf-booking-input"
                    >
                        <option value="Football">Football</option>
                        <option value="Cricket">Cricket</option>
                        <option value="Tennis">Tennis</option>
                        <option value="Basketball">Basketball</option>
                    </select>
                </div>
                <div className="turf-booking-field">
                    <label htmlFor="city" className="turf-booking-label">City:</label>
                    <select
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="turf-booking-input"
                    >
                        <option value="Surat">Surat</option>
                        <option value="Vesu">Vesu</option>
                        <option value="Navsari">Navsari</option>
                        <option value="Ahemadabad">Ahemadabad</option>
                        <option value="Vadodara">Vadodara</option>
                        <option value="Adajan">Adajan</option>
                    </select>
                </div>
                <div className="turf-booking-field">
                    <label htmlFor="date" className="turf-booking-label">Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="turf-booking-input"
                    />
                </div>
                <div className="turf-booking-field">
                    <label htmlFor="customerName" className="turf-booking-label">Customer Name:</label>
                    <input
                        type="text"
                        id="customerName"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="turf-booking-input"
                    />
                </div>
                <div className="turf-booking-field">
                    <label htmlFor="mobileNumber" className="turf-booking-label">Mobile Number:</label>
                    <input
                        type="text"
                        id="mobileNumber"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="turf-booking-input"
                    />
                </div>
                <div className="turf-booking-field">
                    <label htmlFor="hours" className="turf-booking-label">Hours:</label>
                    <input
                        type="number"
                        id="hours"
                        value={hours}
                        onChange={(e) => setHours(parseInt(e.target.value))}
                        className="turf-booking-input"
                        min="1"
                    />
                </div>
                <div className="turf-booking-total">
                    Total Charges: <span> ₹{totalCharges} </span>
                </div>
                <div className="turf-booking-buttons">
                    <button onClick={handleBooking} className="turf-booking-button">Book</button>
                    <button onClick={onClose} className="turf-close-button">Close</button>
                </div>
            </div>
        </div>
    );
};

export default TurfBooking;
