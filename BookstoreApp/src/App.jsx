import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
const Home = () => <h1>Pantalla Principal</h1>;
const Users = () => <h1>Gestión de Usuarios</h1>;

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </Router>
  );
};

export default App;

