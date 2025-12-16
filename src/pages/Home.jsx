import React, { useState, useEffect, useMemo } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faCode, faRocket, faWrench, faEnvelope, faPhone, faBrain, faComments, faLightbulb, faUsers, faChartLine, faDatabase, faCloud } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faWhatsapp, faFacebook, faInstagram, faXTwitter, faHtml5, faCss3Alt, faJs, faReact, faPython, faGitAlt } from '@fortawesome/free-brands-svg-icons'; 

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
        <p className='about-subtitle'>A quick look at what drives me and what I love to do.</p>
        <div className='about-grid'>
          <div className='about-card'>
            <h3>Creative Design</h3>
            <p>Passionate about crafting visually stunning and user-friendly interfaces that leave a lasting impression.</p>
          </div>
          <div className='about-card'>
            <h3>Clean Code</h3>
            <p>Writing maintainable, scalable, and efficient code is at the heart of every project I build.</p>
          </div>
          <div className='about-card'>
            <h3>Startup Spirit</h3>
            <p>Driven by innovation and a love for tech startups, I thrive in fast-paced, dynamic environments.</p>
          </div>
          <div className='about-card'>
            <h3>Problem Solver</h3>
            <p>Enjoy tackling complex challenges and delivering robust solutions that make a difference.</p>
          </div>
          <div className='about-card'>
            <h3>Let’s Connect</h3>
            <p>Open to collaborations, freelance work, or just a friendly chat about technology and design.</p>
          </div>
        </div>
        
        <div className='skills-section'>
          <h3>Technical Skills</h3>
          <div className='skills-grid'>
            <div className='skill-card-progress'>
              <div className='circular-progress' data-percentage='90'>
                <svg className='progress-ring' width='100' height='100'>
                  <circle className='progress-ring-circle' stroke='rgba(255,0,0,0.2)' strokeWidth='4' fill='transparent' r='42' cx='50' cy='50'/>
                  <circle className='progress-ring-circle progress-ring-fill' stroke='#ff0000' strokeWidth='4' fill='transparent' r='42' cx='50' cy='50' strokeDasharray='264' strokeDashoffset='26.4'/>
                </svg>
                <FontAwesomeIcon icon={faHtml5} className='skill-icon-center' />
              </div>
              <FontAwesomeIcon icon={faHtml5} className='mobile-skill-icon' />
              <div className='mobile-progress-bar'>
                <div className='mobile-progress-fill' style={{width: '90%'}}></div>
              </div>
              <h5>HTML</h5>
            </div>
            
            <div className='skill-card-progress'>
              <div className='circular-progress' data-percentage='70'>
                <svg className='progress-ring' width='100' height='100'>
                  <circle className='progress-ring-circle' stroke='rgba(255,0,0,0.2)' strokeWidth='4' fill='transparent' r='42' cx='50' cy='50'/>
                  <circle className='progress-ring-circle progress-ring-fill' stroke='#ff0000' strokeWidth='4' fill='transparent' r='42' cx='50' cy='50' strokeDasharray='264' strokeDashoffset='79.2'/>
                </svg>
                <FontAwesomeIcon icon={faCss3Alt} className='skill-icon-center' />
              </div>
              <FontAwesomeIcon icon={faCss3Alt} className='mobile-skill-icon' />
              <div className='mobile-progress-bar'>
                <div className='mobile-progress-fill' style={{width: '70%'}}></div>
              </div>
              <h5>CSS</h5>
            </div>
            
            <div className='skill-card-progress'>
              <div className='circular-progress' data-percentage='68'>
                <svg className='progress-ring' width='100' height='100'>
                  <circle className='progress-ring-circle' stroke='rgba(255,0,0,0.2)' strokeWidth='4' fill='transparent' r='42' cx='50' cy='50'/>
                  <circle className='progress-ring-circle progress-ring-fill' stroke='#ff0000' strokeWidth='4' fill='transparent' r='42' cx='50' cy='50' strokeDasharray='264' strokeDashoffset='84.48'/>
                </svg>
                <FontAwesomeIcon icon={faJs} className='skill-icon-center' />
              </div>
              <FontAwesomeIcon icon={faJs} className='mobile-skill-icon' />
              <div className='mobile-progress-bar'>
                <div className='mobile-progress-fill' style={{width: '68%'}}></div>
              </div>
              <h5>JavaScript</h5>
            </div>
            
            <div className='skill-card-progress'>
              <div className='circular-progress' data-percentage='60'>
                <svg className='progress-ring' width='100' height='100'>
                  <circle className='progress-ring-circle' stroke='rgba(255,0,0,0.2)' strokeWidth='4' fill='transparent' r='42' cx='50' cy='50'/>
                  <circle className='progress-ring-circle progress-ring-fill' stroke='#ff0000' strokeWidth='4' fill='transparent' r='42' cx='50' cy='50' strokeDasharray='264' strokeDashoffset='105.6'/>
                </svg>
                <FontAwesomeIcon icon={faReact} className='skill-icon-center' />
              </div>
              <FontAwesomeIcon icon={faReact} className='mobile-skill-icon' />
              <div className='mobile-progress-bar'>
                <div className='mobile-progress-fill' style={{width: '60%'}}></div>
              </div>
              <h5>React</h5>
            </div>
            
            <div className='skill-card-progress'>
              <div className='circular-progress' data-percentage='50'>
                <svg className='progress-ring' width='100' height='100'>
                  <circle className='progress-ring-circle' stroke='rgba(255,0,0,0.2)' strokeWidth='4' fill='transparent' r='42' cx='50' cy='50'/>
                  <circle className='progress-ring-circle progress-ring-fill' stroke='#ff0000' strokeWidth='4' fill='transparent' r='42' cx='50' cy='50' strokeDasharray='264' strokeDashoffset='132'/>
                </svg>
                <FontAwesomeIcon icon={faPython} className='skill-icon-center' />
              </div>
              <FontAwesomeIcon icon={faPython} className='mobile-skill-icon' />
              <div className='mobile-progress-bar'>
                <div className='mobile-progress-fill' style={{width: '50%'}}></div>
              </div>
              <h5>Python</h5>
            </div>
          </div>
          
          <h4>Development Tools</h4>
          <div className='skill-cards-grid'>
            <div className='skill-card'>
              <FontAwesomeIcon icon={faGitAlt} className='skill-card-icon' />
              <h5>Git</h5>
            </div>
            <div className='skill-card'>
              <FontAwesomeIcon icon={faGithub} className='skill-card-icon' />
              <h5>GitHub</h5>
            </div>
            <div className='skill-card'>
              <FontAwesomeIcon icon={faCode} className='skill-card-icon' />
              <h5>VS Code</h5>
            </div>
            <div className='skill-card'>
              <FontAwesomeIcon icon={faCloud} className='skill-card-icon' />
              <h5>Netlify</h5>
            </div>
          </div>
          
          <h4>Cloud & Database</h4>
          <div className='skill-cards-grid'>
            <div className='skill-card'>
              <FontAwesomeIcon icon={faCloud} className='skill-card-icon' />
              <h5>Firebase</h5>
            </div>
            <div className='skill-card'>
              <FontAwesomeIcon icon={faDatabase} className='skill-card-icon' />
              <h5>MySQL</h5>
            </div>
          </div>
          
          <h4>Marketing & Analytics</h4>
          <div className='skill-cards-grid'>
            <div className='skill-card'>
              <FontAwesomeIcon icon={faChartLine} className='skill-card-icon' />
              <h5>Google Analytics</h5>
            </div>
          </div>
          
          <h4>Soft Skills</h4>
          <div className='skill-cards-grid'>
            <div className='skill-card'>
              <FontAwesomeIcon icon={faBrain} className='skill-card-icon' />
              <h5>Problem Solving</h5>
            </div>
            <div className='skill-card'>
              <FontAwesomeIcon icon={faComments} className='skill-card-icon' />
              <h5>Communication</h5>
            </div>
            <div className='skill-card'>
              <FontAwesomeIcon icon={faLightbulb} className='skill-card-icon' />
              <h5>Innovation</h5>
            </div>
            <div className='skill-card'>
              <FontAwesomeIcon icon={faUsers} className='skill-card-icon' />
              <h5>Adaptability</h5>
            </div>
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
              <FontAwesomeIcon icon={faXTwitter} />
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
        
        <div className='direct-email'>
          <h3>Send me a message</h3>
          <form className='email-form' action="https://formspree.io/f/mdkqrwgw" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>    </div>
  );
}

export default Home;