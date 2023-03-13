import DashboardLayout from 'components/libs/layout/dashboard';
import Home from 'pages';
import DashboardPage from 'pages/dashboard';
import AcademicClassesPage from 'pages/dashboard/classes';
import AddNewClass from 'pages/dashboard/classes/add-new-class';
import PaymentsPage from 'pages/dashboard/payments';
import StudentsPage from 'pages/dashboard/students';
import AddNewStudent from 'pages/dashboard/students/add-new-student';
import ViewStudent from 'pages/dashboard/students/view-student';
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
                    <Route index element={<DashboardPage />} />
                    <Route path="classes" element={<AcademicClassesPage />} />
                    <Route path="classes/add" element={<AddNewClass />} />
                    <Route path="students" element={<StudentsPage />} />
                    <Route path="students/add" element={<AddNewStudent />} />
                    <Route path="students/view/:studentUUID" element={<ViewStudent />} />
                    <Route path="payments" element={<PaymentsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
