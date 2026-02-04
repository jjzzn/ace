import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Courses from './pages/Courses';

// Component to scroll to top on route change
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Don't scroll to top if navigating to home with a hash (for section navigation)
    if (location.pathname === '/' && location.hash) {
      return;
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
