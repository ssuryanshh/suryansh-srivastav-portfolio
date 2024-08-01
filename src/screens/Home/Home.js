import React, { useState, useEffect } from 'react';
import './style.scss';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa6';
import imageSrc from '../../assets/self.jpg';


function Home() {
  const texts = [' Frontend Developer ', ' Backend Developer ', ' Android Developer ', ' MERN Developer '];
  const [currentText, setCurrentText] = useState(' ');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 100; 
    const delayBetweenTexts = 2000; 

    const type = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setCurrentText(texts[index].slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      } else {
        if (charIndex < texts[index].length) {
          setCurrentText(texts[index].slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), delayBetweenTexts);
        }
      }
    };

    const timeoutId = setTimeout(type, isDeleting ? typeSpeed / 2 : typeSpeed);
    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting]);

  return (
    <div className="home">
      <div className="home-content">
        <h1>
          Hi, It's <span>Suryansh</span>
        </h1>
        <h3 className="text-animation">
          I'm a <span>{currentText}</span>
        </h3>
        <p>
        "Hello! I'm Suryansh Srivastav, an aspiring Software Developer and Creative Technologist currently pursuing a degree in Computer Science and Engineering at Lovely Professional University. With a strong foundation in languages like C++, JavaScript, Java, Kotlin, Python, and C#, I specialize in both front-end and back-end development using frameworks such as React, NodeJS, and ExpressJS as well as Mobile Development. My technical toolkit includes MySQL, MongoDB, Git, and more. Beyond my technical skills, I pride myself on being a problem solver, a team player, and adaptable, always ready to take on new challenges. My portfolio showcases a blend of my projects in full stack and mobile development, as well as my creative pursuits in photography and design. Explore my work and connect with me on LinkedIn or GitHub!"
        </p>

        <div className="social-icons">
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaGithub />
          </a>
          <a href="#">
            <FaEnvelope />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </div>
        <div className="btn-grp">
          <button className="hire">Hire</button>
          <button className="cv">Download CV</button>
        </div>
      </div>
      <div className="home-img" style={{ position: 'relative', zIndex: 1 }}>
  <img src={imageSrc} alt="Suryansh" style={{ width: '100%', height: 'auto', zIndex: 1 }} />
</div>
    </div>
  );
}

export default Home;
