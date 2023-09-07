import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import { Login } from './container';
import ProtectedRoute from './ProtectedRoute';
import { Home } from './container';
import { Signup } from './container';

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
