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
    const turfBookings = bookings.filter(booking => booking.type === 'turf');

    return (
        <div className="unique-booking-container">
            <div className="unique-restaurant-booking-list">
                <h2>Restaurant Bookings</h2>
                <table className="unique-booking-table">
                    <thead>
                        <tr>
                            <th>Restaurant</th>
                            <th>Customer</th>
                            <th>Table</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Mobile No.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {restaurantBookings.map((booking, index) => (
                            <tr key={index}>
                                <td>{booking.restaurantName}</td>
                                <td>{booking.customerName}</td>
                                <td>{booking.tableCapacity}</td>
                                <td>{booking.date}</td>
                                <td>{booking.time}</td>
                                <td>{booking.mobileNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="unique-banquet-booking-list">
                <h2>Banquet Bookings</h2>
                <table className="unique-booking-table">
                    <thead>
                        <tr>
                            <th>Banquet</th>
                            <th>Customer</th>
                            <th>Option</th>
                            <th>Days</th>
                            <th>Date</th>
                            <th>Total Charges</th>
                            <th>Mobile Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {banquetBookings.map((booking, index) => (
                            <tr key={index}>
                                <td>{booking.banquetName}</td>
                                <td>{booking.customerName}</td>
                                <td>{booking.option}</td>
                                <td>{booking.days}</td>
                                <td>{booking.date}</td>
                                <td>₹{booking.totalCharges}</td>
                                <td>{booking.mobileNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="unique-turf-booking-list">
                <h2>Turf Bookings</h2>
                <table className="unique-booking-table">
                    <thead>
                        <tr>
                            <th>Sport</th>
                            <th>City</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Hours</th>
                            <th>Total Charges</th>
                            <th>Mobile Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {turfBookings.map((booking, index) => (
                            <tr key={index}>
                                <td>{booking.sport}</td>
                                <td>{booking.city}</td>
                                <td>{booking.customerName}</td>
                                <td> {booking.date} </td>
                                <td>{booking.hours}</td>
                                <td>₹{booking.totalCharges}</td>
                                <td>{booking.mobileNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingList;
