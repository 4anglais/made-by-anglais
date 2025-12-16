import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark'); // 'light' or 'dark'
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const preloadImages = () => {
      const images = [require('./assets/myimage.png')];
      let loadedCount = 0;
      
      const checkAllLoaded = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setTimeout(() => setLoading(false), 500);
        }
      };
      
      images.forEach(src => {
        const img = new Image();
        img.onload = checkAllLoaded;
        img.onerror = checkAllLoaded;
        img.src = src;
      });
    };
    
    preloadImages();
  }, []);

  return (
    <div className={`App ${theme}`}>
      {loading && <Loader />}
      {!loading && <>
        <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
        <main>
          <Home />
        </main>
        <Footer />
      </>}
    </div>
  );
}

export default App;
