
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import PrivateRoute from './components/PrivateRoute';
import BlogPost from './components/BlogPost'; 
import ProtectedRoute from './components/ProtectedRoute';
const App = () => (
  <Router>
      <div>
        <Profile />
          <Routes>
              <Route path="/login" element={<Login />} />
              <PrivateRoute path="/profile" element={<Profile />} />
              <Route path="/blog/:id" element={<BlogPost />} /> 
              <Route
                    path="/profile/:userId"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />         
              </Routes>
      </div>
  </Router>
);

export default App;
