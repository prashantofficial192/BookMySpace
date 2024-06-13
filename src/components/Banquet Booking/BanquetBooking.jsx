import React, { useState } from 'react';
import './BanquetBooking.css';

const BanquetBooking = ({ banquet, onClose }) => {

    // Define state variables using useState hook
    const [selectedOption, setSelectedOption] = useState('innerHall');
    const [selectedDays, setSelectedDays] = useState(1);
    const [selectedDate, setSelectedDate] = useState('');
    const [totalCharges, setTotalCharges] = useState(15000);
    const [customerName, setCustomerName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    // Return null if banquet is not provided
    if (!banquet) {
        return null;
    }

    // Handle changes in booking option
    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setTotalCharges(selectedDays * (option === 'innerHall' ? 15000 : 20000));
    };

    // Handle changes in number of days
    const handleDaysChange = (e) => {
        const days = parseInt(e.target.value, 10);
        setSelectedDays(days);
        setTotalCharges(days * (selectedOption === 'innerHall' ? 15000 : 20000));
    };

    // Handle changes in selected date
    const handleDateChange = (e) => {
        const selectedDate = e.target.value;

        // Prevent selecting past dates
        const today = new Date();
        const selected = new Date(selectedDate);

        if (selected < today) {

            // If selected date is in the past, reset date state or alert the user
            setSelectedDate('');
            alert('Please select a date from today onwards.');
        } else {
            setSelectedDate(selectedDate); // Update date state if it's valid
        }
    };

    // Handle booking confirmation
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

        // Retrieve existing bookings from local storage or initialize with an empty array
        const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];

        // Check if the banquet hall is already booked on the selected date
        const isBooked = existingBookings.some(booking =>
            booking.type === 'banquet' &&
            booking.banquetName === newBooking.banquetName &&
            booking.option === newBooking.option &&
            booking.date === newBooking.date
        );

        if (isBooked) {
            alert('The banquet hall is already booked for the selected date and option.');
        } else {

            // Add new booking to existing bookings and save to local storage
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
                        min={new Date().toISOString().split('T')[0]} // Set min attribute to current date
                    />
                </div>
                <div className="banquet-booking-total-charges">
                    <p>Total Charges: ₹<span>{totalCharges}</span></p>
                </div>
                <button onClick={handleBookingConfirmation} className="banquet-booking-confirm-button">Book</button>
                <button onClick={onClose} className="banquet-booking-close-button">Close</button>
            </div>
        </>
    );
};

export default BanquetBooking;
