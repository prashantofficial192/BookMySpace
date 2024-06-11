import React, { useEffect, useState } from 'react';
import './BookingList.css';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
        setBookings(storedBookings);
    }, []);

    const restaurantBookings = bookings.filter(booking => booking.type === 'restaurant');
    const banquetBookings = bookings.filter(booking => booking.type === 'banquet');

    return (
        <div className="booking-container">
            <div className="restaurant-booking-list">
                <h2>Restaurant Bookings</h2>
                <table className="booking-table">
                    <thead>
                        <tr>
                            <th>Restaurant</th>
                            <th>Table</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {restaurantBookings.map((booking, index) => (
                            <tr key={index}>
                                <td>{booking.restaurantName}</td>
                                <td>{booking.tableCapacity}</td>
                                <td>{booking.date}</td>
                                <td>{booking.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="banquet-booking-list">
                <h2>Banquet Bookings</h2>
                <table className="booking-table">
                    <thead>
                        <tr>
                            <th>Banquet</th>
                            <th>Option</th>
                            <th>Days</th>
                            <th>Date</th>
                            <th>Total Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        {banquetBookings.map((booking, index) => (
                            <tr key={index}>
                                <td>{booking.banquetName}</td>
                                <td>{booking.option}</td>
                                <td>{booking.days}</td>
                                <td>{booking.date}</td>
                                <td>₹{booking.totalCharges}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingList;
