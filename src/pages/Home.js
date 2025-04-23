import React from 'react';
import './Home.css'; 
import Typewriter from 'typewriter-effect'; 
import 'font-awesome/css/font-awesome.min.css';  // Import Font Awesome

function Home() {
  return (
    <div className='home'>
      <section className='intro'>
        <div className='text'>
          <h1>Hi, I am Angel</h1>
          <p>
            I{' '}
            <span className='Typewriter'>
              <Typewriter
                options={{
                  strings: ['Design & Build Websites', 'am a Tech Startup Enthusiast'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 50,
                }}
              />
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
