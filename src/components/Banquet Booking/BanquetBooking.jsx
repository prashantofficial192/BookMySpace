import React, { useState } from 'react';
import './BanquetBooking.css';

const BanquetBooking = ({ banquet, onClose }) => {
    const [selectedOption, setSelectedOption] = useState('innerHall');
    const [selectedDays, setSelectedDays] = useState(1);
    const [selectedDate, setSelectedDate] = useState('');
    const [totalCharges, setTotalCharges] = useState(15000);
    const [customerName, setCustomerName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    if (!banquet) {
        return null;
    }

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setTotalCharges(selectedDays * (option === 'innerHall' ? 15000 : 20000)); // Adjust charges based on option
    };

    const handleDaysChange = (e) => {
        const days = parseInt(e.target.value, 10);
        setSelectedDays(days);
        setTotalCharges(days * (selectedOption === 'innerHall' ? 15000 : 20000));
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleBookingConfirmation = () => {
        if (!selectedDate || !customerName || !mobileNumber) {
            alert("Please fill in all fields.");
            return;
        }

        const newBooking = {
            type: 'banquet',
            banquetName: banquet.name,
            option: selectedOption === 'innerHall' ? 'Inner Hall' : 'Inner Hall and Outer Lawn Area',
            days: selectedDays,
            date: selectedDate,
            totalCharges,
            customerName,
            mobileNumber,
        };

        const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];

        const isBooked = existingBookings.some(booking =>
            booking.type === 'banquet' &&
            booking.banquetName === newBooking.banquetName &&
            booking.option === newBooking.option &&
            booking.date === newBooking.date
        );

        if (isBooked) {
            alert('Hall Booked Already or unavailable');
        } else {
            existingBookings.push(newBooking);
            localStorage.setItem('bookings', JSON.stringify(existingBookings));
            alert(`You have booked ${newBooking.option} for ${selectedDays} days on ${selectedDate}. Total Charges: ₹${totalCharges}`);
            onClose();
        }
    };

    return (
        <>
            <div className="banquet-booking-modal-backdrop" onClick={onClose}></div>
            <div className="banquet-booking-modal-container">
                <h2>Book <span className="book-ban">{banquet.name}</span></h2>
                <div className="banquet-booking-options">
                    <label>
                        <input
                            type="radio"
                            value="innerHall"
                            checked={selectedOption === 'innerHall'}
                            onChange={() => handleOptionChange('innerHall')}
                        />
                        Inner Hall
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="innerHallAndOuterLawn"
                            checked={selectedOption === 'innerHallAndOuterLawn'}
                            onChange={() => handleOptionChange('innerHallAndOuterLawn')}
                        />
                        Inner Hall and Outer Lawn
                    </label>
                </div>
                <div className="banquet-booking-customer-details">
                    <label htmlFor="customerName">Customer Name:</label>
                    <input
                        type="text"
                        id="customerName"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                    />
                    <label htmlFor="mobileNumber">Mobile Number:</label>
                    <input
                        type="tel"
                        id="mobileNumber"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                    />
                </div>
                <div className="banquet-booking-days-selection">
                    <label htmlFor="banquet-days">Select Number of Days:</label>
                    <input
                        type="number"
                        id="banquet-days"
                        value={selectedDays}
                        onChange={handleDaysChange}
                        min="1"
                    />
                </div>
                <div className="banquet-booking-date-selection">
                    <label htmlFor="banquet-date">Select Date:</label>
                    <input
                        type="date"
                        id="banquet-date"
                        value={selectedDate}
                        onChange={handleDateChange}
                    />
                </div>
                <div className="banquet-booking-total-charges">
                    <p>Total Charges: ₹ {totalCharges}</p>
                </div>
                <button onClick={handleBookingConfirmation} className="banquet-booking-confirm-button">Book</button>
                <button onClick={onClose} className="banquet-booking-close-button">Close</button>
            </div>
        </>
    );
};

export default BanquetBooking;
