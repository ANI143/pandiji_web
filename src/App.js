import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Service from './pages/Service';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer /> {/* Add Footer here */}
    </Router>
  );
}

export default App;
