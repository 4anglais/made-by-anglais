import React, { useState, useEffect, useMemo } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faCode, faRocket, faWrench, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter, faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'; 

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
      <section className='intro' id='home'>
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

      <section className='features' id='features'>
        <h2>What I Offer</h2>
        <div className='cards-container'>
          <div className='feature-card design-card'>
            <div className='card-icon'><FontAwesomeIcon icon={faPalette} /></div>
            <h3>Design</h3>
            <p>Creating beautiful and intuitive user interfaces with modern design principles.</p>
          </div>

          <div className='feature-card development-card'>
            <div className='card-icon'><FontAwesomeIcon icon={faCode} /></div>
            <h3>Development</h3>
            <p>Building fast, responsive, and scalable web applications with latest technologies.</p>
          </div>

          <div className='feature-card performance-card'>
            <div className='card-icon'><FontAwesomeIcon icon={faRocket} /></div>
            <h3>Performance</h3>
            <p>Optimizing applications for speed, efficiency, and seamless user experience.</p>
          </div>

          <div className='feature-card solutions-card'>
            <div className='card-icon'><FontAwesomeIcon icon={faWrench} /></div>
            <h3>Solutions</h3>
            <p>Providing tailored solutions to meet your unique business and technical needs.</p>
          </div>
        </div>
      </section>

      <section className='about' id='about'>
        <h2>About Me</h2>
        <p className='about-subtitle'>Full Stack Developer & Tech Enthusiast</p>
        
        <div className='about-grid'>
          <div className='about-card'>
            <h3>Who I Am</h3>
            <p>I'm a passionate developer with expertise in creating modern, responsive web applications. Customize this section with your own story!</p>
          </div>
          
          <div className='about-card'>
            <h3>What I Do</h3>
            <p>I specialize in full-stack development, designing beautiful interfaces and building robust backends. Share your skills and experience here.</p>
          </div>
          
          <div className='about-card'>
            <h3>My Passion</h3>
            <p>I'm driven by creating elegant solutions to complex problems. Talk about what motivates you and your vision for technology.</p>
          </div>
          
          <div className='about-card'>
            <h3>Let's Connect</h3>
            <p>Whether you have a project in mind or just want to chat about tech, feel free to reach out. I'm always eager to collaborate!</p>
          </div>
        </div>
      </section>

      <section className='projects' id='projects'>
        <h2>Projects</h2>
        <div className='projects-placeholder'>
          <p>Coming soon... Your amazing projects will appear here!</p>
        </div>
      </section>

      <section className='contact' id='contact'>
        <h2>Contact Me</h2>
        <p className='contact-subtitle'>Get in touch with me through any of these channels</p>
        
        <div className='contact-grid'>
          <a href="mailto:angelphiri.2021@gmail.com" className='contact-card email-card'>
            <div className='contact-icon'>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <h3>Email</h3>
          </a>

          <a href="tel:+260777843642" className='contact-card phone-card'>
            <div className='contact-icon'>
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <h3>Call</h3>
          </a>

          <a href="https://wa.me/260777843642" target="_blank" rel="noopener noreferrer" className='contact-card whatsapp-card'>
            <div className='contact-icon'>
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>
            <h3>WhatsApp</h3>
          </a>

          <a href="https://www.linkedin.com/in/4anglais" target="_blank" rel="noopener noreferrer" className='contact-card linkedin-card'>
            <div className='contact-icon'>
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <h3>LinkedIn</h3>
          </a>

          <a href="https://github.com/4anglais" target="_blank" rel="noopener noreferrer" className='contact-card github-card'>
            <div className='contact-icon'>
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <h3>GitHub</h3>
          </a>

          <a href="https://x.com/4anglais" target="_blank" rel="noopener noreferrer" className='contact-card twitter-card'>
            <div className='contact-icon'>
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <h3>X</h3>
          </a>

          <a href="https://www.facebook.com/4anglais" target="_blank" rel="noopener noreferrer" className='contact-card facebook-card'>
            <div className='contact-icon'>
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <h3>Facebook</h3>
          </a>

          <a href="https://www.instagram.com/4anglais" target="_blank" rel="noopener noreferrer" className='contact-card instagram-card'>
            <div className='contact-icon'>
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <h3>Instagram</h3>
          </a>
        </div>
      </section>    </div>
  );
}

export default Home;