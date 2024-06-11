import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from "./Root"
import RestaurantLayout from './components/Restaurant/RestaurantLayout'
import BanquetLayout from './components/Banquet/BanquetLayout'
import TurfLayout from "./components/Turf/TurfLayout"
import Homepage from './components/Homepage/Homepage';
import RestaurantBooking from './components/Restaurant Booking/RestaurantBooking';
import BookingList from './components/BookingList/BookingList';
import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Homepage />} />
      <Route path="restaurant" element={<RestaurantLayout />} />
      <Route path="banquet" element={<BanquetLayout />} />
      <Route path="turf" element={<TurfLayout />} />
      {/* <Route path="restaurantBooking" element={<RestaurantBooking />} /> */}
      <Route path="bookings" element={<BookingList />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
