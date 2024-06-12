import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from "./Root"
import RestaurantLayout from './components/Restaurant/RestaurantLayout'
import BanquetLayout from './components/Banquet/BanquetLayout'
import TurfLayout from "./components/Turf/TurfLayout"
import Homepage from './components/Homepage/Homepage';
import BookingList from './components/BookingList/BookingList';
import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Homepage />} />
      <Route path="restaurant" element={<RestaurantLayout />} />
      <Route path="banquet" element={<BanquetLayout />} />
      <Route path="turf" element={<TurfLayout />} />
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

reportWebVitals();
