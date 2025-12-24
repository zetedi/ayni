import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Shop from './pages/Shop';
import Experience from './pages/Experience';
import Temple from './pages/Temple';
import Food from './pages/Food';
import Stay from './pages/Stay';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-shadow">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stay" element={<Stay />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/temple" element={<Temple />} />
              <Route path="/food" element={<Food />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;