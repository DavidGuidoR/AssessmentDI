import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Home from './pages/Home';
import Users from './pages/Users';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </Router>
  );
};

export default App;

