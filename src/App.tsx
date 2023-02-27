import DashboardLayout from 'components/libs/layout/dashboard';
import Home from 'pages';
import Dashboard from 'pages/dashboard';
import Payments from 'pages/dashboard/payments';
import Login from 'pages/login';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="payments" element={<Payments />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
