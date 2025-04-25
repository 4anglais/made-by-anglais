import React, { useState, useEffect, useMemo } from 'react';
import './Home.css'; 

function Home() {
  // Memoizing the strings array to prevent unnecessary recalculations...lol
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
        setTimeout(() => setIsDeleting(true), 1000); 
      } else if (isDeleting && updatedString === '') {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % strings.length); 
      }
    }, 100); 

    return () => clearInterval(typingInterval); 
  }, [currentString, isDeleting, index, strings]); 

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
    </div>
  );
}

export default Home;
