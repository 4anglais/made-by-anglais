import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark'); // 'light' or 'dark'

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />

      <main>
        <Home />
      </main>

      <Footer />
    </div>
  );
}

export default App;
