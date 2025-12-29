import React, { useEffect, useRef } from 'react';
import './Home.css';
import ProjectCard from '../components/ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faCode, faRocket, faWrench, faEnvelope, faPhone, faBrain, faComments, faLightbulb, faUsers, faChartLine, faDatabase, faCloud, faFire, faBolt, faWind } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faWhatsapp, faFacebook, faInstagram, faXTwitter, faHtml5, faCss3Alt, faJs, faReact, faPython, faGitAlt } from '@fortawesome/free-brands-svg-icons'; 

function Home() {
  const offerRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const sections = [offerRef.current, aboutRef.current, skillsRef.current];
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className='home'>
      <section className='intro' id='home'>
        <div className='intro-header'>
          <div className='text'>
            <h1>Hi, I am Angel</h1>
            <div className='stickers-container'>
              <div className='sticker sticker-rotate'>I am a FrontEnd Web Developer</div>
              <div className='sticker sticker-succession'>I am a Tech Enthusiast</div>
              <div className='sticker sticker-wiggle'>I am a Mobile Systems & Android Modding Specialist</div>
            </div>
          </div>
          <div className='image'>
            <img src={require('../assets/myimage.png')} alt="Angel" />
          </div>
        </div>
      </section>

      <section className='features blur-clear-scroll' id='features' ref={offerRef}>
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

      <section className='about succession-scroll' id='about' ref={aboutRef}>
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
        
        <div className='skills-section stomp-scroll' ref={skillsRef}>
          <h3>Technical Skills</h3>
          <div className='skills-grid'>
            <div className='skill-card-progress'>
              <div className='circular-progress' data-percentage='90'>
                <svg className='progress-ring' width='80' height='80'>
                  <circle className='progress-ring-circle' stroke='rgba(255,0,0,0.2)' strokeWidth='4' fill='transparent' r='36' cx='40' cy='40'/>
                  <circle className='progress-ring-circle progress-ring-fill' stroke='#ff0000' strokeWidth='4' fill='transparent' r='36' cx='40' cy='40' strokeDasharray='226.08' strokeDashoffset='22.6'/>
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
                <svg className='progress-ring' width='80' height='80'>
                  <circle className='progress-ring-circle' stroke='rgba(255,0,0,0.2)' strokeWidth='4' fill='transparent' r='36' cx='40' cy='40'/>
                  <circle className='progress-ring-circle progress-ring-fill' stroke='#ff0000' strokeWidth='4' fill='transparent' r='36' cx='40' cy='40' strokeDasharray='226.08' strokeDashoffset='67.8'/>
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
                <svg className='progress-ring' width='80' height='80'>
                  <circle className='progress-ring-circle' stroke='rgba(255,0,0,0.2)' strokeWidth='4' fill='transparent' r='36' cx='40' cy='40'/>
                  <circle className='progress-ring-circle progress-ring-fill' stroke='#ff0000' strokeWidth='4' fill='transparent' r='36' cx='40' cy='40' strokeDasharray='226.08' strokeDashoffset='72.3'/>
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
              <div className='circular-progress' data-percentage='65'>
                <svg className='progress-ring' width='80' height='80'>
                  <circle className='progress-ring-circle' stroke='rgba(255,0,0,0.2)' strokeWidth='4' fill='transparent' r='36' cx='40' cy='40'/>
                  <circle className='progress-ring-circle progress-ring-fill' stroke='#ff0000' strokeWidth='4' fill='transparent' r='36' cx='40' cy='40' strokeDasharray='226.08' strokeDashoffset='79.1'/>
                </svg>
                <span className='skill-icon-center ts-logo'>TS</span>
              </div>
              <span className='mobile-skill-icon ts-logo-mobile'>TS</span>
              <div className='mobile-progress-bar'>
                <div className='mobile-progress-fill' style={{width: '65%'}}></div>
              </div>
              <h5>TypeScript</h5>
            </div>
            
            <div className='skill-card-progress'>
              <div className='circular-progress' data-percentage='60'>
                <svg className='progress-ring' width='80' height='80'>
                  <circle className='progress-ring-circle' stroke='rgba(255,0,0,0.2)' strokeWidth='4' fill='transparent' r='36' cx='40' cy='40'/>
                  <circle className='progress-ring-circle progress-ring-fill' stroke='#ff0000' strokeWidth='4' fill='transparent' r='36' cx='40' cy='40' strokeDasharray='226.08' strokeDashoffset='90.4'/>
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
                <svg className='progress-ring' width='80' height='80'>
                  <circle className='progress-ring-circle' stroke='rgba(255,0,0,0.2)' strokeWidth='4' fill='transparent' r='36' cx='40' cy='40'/>
                  <circle className='progress-ring-circle progress-ring-fill' stroke='#ff0000' strokeWidth='4' fill='transparent' r='36' cx='40' cy='40' strokeDasharray='226.08' strokeDashoffset='113'/>
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
          <div className='skill-cards-grid small-grid'>
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
          <div className='skill-cards-grid small-grid'>
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
        <div className='projects-list'>
          <ProjectCard 
            name="Learnr"
            description="A comprehensive learning management platform designed to streamline education and skill acquisition."
            features={[
              "Task and goal management",
              "Custom learning roadmaps",
              "Firebase authentication & profiles",
              "Progress tracking dashboards",
              "Responsive UI with dark/light mode"
            ]}
            techStack={[
              { name: "TypeScript", icon: faCode },
              { name: "Vite", icon: faBolt },
              { name: "React", icon: faReact },
              { name: "Firebase", icon: faFire },
              { name: "Firestore", icon: faDatabase },
              { name: "Tailwind CSS", icon: faWind }
            ]}
            links={{
              live: "https://lurnnr.netlify.app/",
              github: "https://github.com/4anglais/learnr2.0.git"
            }}
          />
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
            <input type="text" name="name" placeholder="Your Name" aria-label="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" aria-label="Your Email" required />
            <textarea name="message" placeholder="Your Message" aria-label="Your Message" rows="4" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>    </div>
  );
}

export default Home;