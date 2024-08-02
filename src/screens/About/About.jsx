import React from 'react';
import "./style.scss";
import PageHeader from '../../components/PageHeader/PageHeader';
import { Animate } from 'react-simple-animate';
import { TfiAndroid } from "react-icons/tfi";
import { FaDatabase, FaLaptopCode} from "react-icons/fa6";
import { FaPhotoVideo } from "react-icons/fa";
const personalDetails = [
  {
    label: "Name",
    value: "Suryansh Srivastav",
  },
  {
    label: "Age",
    value: "20",
  },
  {
    label: "Address",
    value: "Jalandhar, India",
  },
  {
    label: "Email",
    value: "suryansh.s@outook.com",
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/srivastavsuryansh/",
  },
  {
    label: "GitHub",
    value: "https://github.com/ssuryanshh"
  }
];


const summary = `Hello! I'm Suryansh Srivastav, currently pursuing a degree in Computer Science and Engineering at Lovely Professional University. My journey into the world of technology has been fueled by a passion for problem-solving and a fascination with how digital solutions can transform lives. With a strong foundation in languages like C++, JavaScript, Java, Kotlin, Python, and C#, I am committed to leveraging my skills to create impactful software applications. My career goals revolve around becoming a versatile software developer, capable of tackling challenges in both front-end and back-end development. I am particularly enthusiastic about full stack and mobile development, aiming to deliver seamless user experiences through well-crafted applications.

Outside of my academic and professional pursuits, I have a keen interest in photography, particularly in capturing landscapes and portraits. Photography allows me to explore and appreciate the beauty of the world from different perspectives. Additionally, I enjoy photo and video editing, using software like Adobe Photoshop and Premiere Pro, which has enhanced my ability to tell compelling visual stories. Graphic design is another area where I channel my creativity, creating digital art, logos, and other visual content using tools like Adobe Illustrator and Canva. These creative hobbies complement my technical skills, helping me develop a keen eye for detail and composition.`

function About() {
  return (
    <div id='about' className='about'>
      <PageHeader headerText="About Me" />
      <div className='about__content'>
        <div className='about__content__personalWrapper'>
          <Animate
          play
          duration={1.5}
          delay={0}
          start={{
            transform:"translateX(-900px)",
          }}
          end={{
            transform:"translateX(0px)",
          }}
          >
            <h3>Introduction</h3>
            <p>{summary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Contact Details
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title"><b>{item.label} :</b></span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
            <button className='CV'>Download CV</button>
          </Animate>
        </div>
        <div className='about__content__servicesWrapper'>
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(800px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className='about__content__servicesWrapper__innerContent'>
              <div>
                <TfiAndroid size={60} color='var(--red-theme-main-color)'/>
              </div>
              <div>
                <FaDatabase size={60} color='var(--red-theme-main-color)'/>
              </div>
              <div>
                <FaLaptopCode size={60} color='var(--red-theme-main-color)'/>
              </div>
              <div >
                <FaPhotoVideo size={60} color ='var(--red-theme-main-color)'/>
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </div>

  );
}

export default About;
