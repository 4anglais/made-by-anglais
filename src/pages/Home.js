import React, { useState, useEffect, useMemo } from 'react';
import './Home.css'; 
import 'font-awesome/css/font-awesome.min.css';  // Import Font Awesome

function Home() {
  // Memoizing the strings array to prevent unnecessary recalculations
  const strings = useMemo(() => [
    'Design & Build Websites', 
    'am a Tech Startup Enthusiast'
  ], []);

  const [currentString, setCurrentString] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentWord = strings[index];
      const updatedString = isDeleting
        ? currentWord.slice(0, currentString.length - 1)
        : currentWord.slice(0, currentString.length + 1);
      
      setCurrentString(updatedString);

      if (!isDeleting && updatedString === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000); // Delay before deleting
      } else if (isDeleting && updatedString === '') {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % strings.length); // Move to the next string
      }
    }, 100); // Adjust typing speed here (in ms)

    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, [currentString, isDeleting, index, strings]); // Only depend on necessary state

  return (
    <div className='home'>
      <section className='intro'>
        <div className='text'>
          <h1>Hi, I am Angel</h1>
          <p>
            I{' '}
            <span className='typewriter-wrapper'>
              {currentString}
            </span>
          </p>
        </div>
        <div className='image'>
          <img src={require('../assets/myimage.png')} alt="Angel" />
        </div>
      </section>

      {/* Social Media Section */}
      <section className='social-media'>
        <h2>Reach me out on:</h2>
        <div className='social-icons'>
          <a href="https://www.facebook.com/4anglais" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/4anglais" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://github.com/4anglais" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/4anglais" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
