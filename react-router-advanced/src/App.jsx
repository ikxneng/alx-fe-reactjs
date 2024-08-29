
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import PrivateRoute from './components/PrivateRoute';

const App = () => (
  <Router>
      <div>
        <Profile />
          <Routes>
              <Route path="/login" element={<Login />} />
              <PrivateRoute path="/profile" element={<Profile />} />
              <Route path="/" element={<h2>Home</h2>} />
          </Routes>
      </div>
  </Router>
);

export default App;