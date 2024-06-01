import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Seasons from './pages/Seasons';
import PayBooking from './pages/PayBooking';
import SignUp from './pages/SignUp';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/destinations" element={<Destinations/>} />
            <Route path="/seasons" element={<Seasons/>} />
            <Route path="/pay_booking" element={<PayBooking/>} />
            <Route path="/signup" element={<SignUp/>} />
        </Routes>
    );
};

export default AppRoutes;
