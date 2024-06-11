// RestaurantBooking.jsx
import React, { useState } from 'react';
import './RestaurantBooking.css';

const RestaurantBooking = ({ restaurant, onClose }) => {
    const [selectedTable, setSelectedTable] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    if (!restaurant) {
        return null;
    }

    const tables = [
        { id: 1, capacity: 2 },
        { id: 2, capacity: 4 },
        { id: 3, capacity: 6 },
        { id: 4, capacity: 8 },
        { id: 5, capacity: 10 },
    ];

    const handleTableSelect = (table) => {
        setSelectedTable(table);
    };

    const handleBooking = () => {
        if (selectedTable && selectedDate && selectedTime) {
            const bookingDetails = {
                restaurantName: restaurant.name,
                tableCapacity: selectedTable.capacity,
                date: selectedDate,
                time: selectedTime,
            };

            const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];

            // Check if the same booking already exists
            const isBookingAvailable = existingBookings.some(booking =>
                booking.restaurantName === bookingDetails.restaurantName &&
                booking.tableCapacity === bookingDetails.tableCapacity &&
                booking.date === bookingDetails.date &&
                booking.time === bookingDetails.time
            );

            if (isBookingAvailable) {
                alert('Table not available for the selected date and time.');
            } else {
                const updatedBookings = [...existingBookings, bookingDetails];
                localStorage.setItem('bookings', JSON.stringify(updatedBookings));

                alert(`Table for ${selectedTable.capacity} booked at ${restaurant.name} on ${selectedDate} at ${selectedTime}!`);
                onClose();
            }
        } else {
            alert('Please select a table, date, and time.');
        }
    };

    return (
        <>
            <div className="booking-backdrop" onClick={onClose}></div>
            <div className="booking-modal">
                <h2>Book a Table at <span className="res-name">{restaurant.name}</span></h2>
                <div className="table-list">
                    {tables.map((table) => (
                        <button
                            key={table.id}
                            className={`table ${selectedTable && selectedTable.id === table.id ? 'selected' : ''}`}
                            onClick={() => handleTableSelect(table)}
                        >
                            Table for {table.capacity}
                        </button>
                    ))}
                </div>
                <div className="date-time-picker">
                    <label htmlFor="date">Select Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                    <label htmlFor="time">Select Time:</label>
                    <input
                        type="time"
                        id="time"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                    />
                </div>
                <button onClick={handleBooking} className="book-now-button">Confirm Booking</button>
                <button onClick={onClose} className="close-button">Close</button>
            </div>
        </>
    );
};

export default RestaurantBooking;
