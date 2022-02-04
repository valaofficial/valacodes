import React from 'react';
import "./Landing.css"
import Navbar from './Navbar'

function Landing() {
  return (
    <section id="SiteSection">
        <Navbar/>
        <IntroSection/>
        <About/>
        <Skills/>
        <MyProjects/>
    </section>
  );
}

export default Landing;

function IntroSection(){
  return(
    <>
      <section id="intro-section">
        <div className='intro'>
          <div className='intro-text'>
            <h3>Hi There</h3>
            <h2>I’m Hyelavala</h2>
            <h4>& I’m a Developer . Designer</h4>
            <p>I’m a Nigerian based front-end developer
                who specializes in building beautiful & interactive
                front-end experiences for you  
            </p>

            <button className='intro-cta'>
              Hire Me
            </button>
          </div>

          <div className='intro-image'>
            <img src='/images/profile-pic.png' alt='Hyelavala'/>
          </div>
        </div>

        <div className='downBtn'>
        <img src='/images/Down.png' alt='Down'/>
        </div>
      </section>
    </>
  )
}

function About(){
  return(
    <section id="about-section">
      <div className='about-text'>
        <p>
        Hello! My name is Hyelavala and I enjoy creating  awesome
        user interfaces using my skills, I started my journey in 2019 when i attended
        my first Hackathon
        </p>

        <p>
        Since then i’ve worked on alot of  personal & freelance
        projects as well as getting my first internship at a 
        Software development firm in 2020
        </p>

        <p>
        I am currently working on a platform that helps 
        tutors can create classrooms online called  
        <b> Skillory</b>
        </p>
      </div>
      <div className='about-img'>
        <img src='/images/profile-pic.png' alt='Hyelavala'/>
      </div>
    </section>
  )
}


function Skills(){
  return(
    <section id="skills-section">
      <div className='skills-section-title'>
        <h1>My Skills</h1>
      </div>
      <div className='skills'>
        <div className='dev-skills'>
          <div>
            <h1>Development</h1>
          </div>
          <ul>
            <li>
              <img src='/images/image 1.png' alt='Javascript'/>
              <p>Javascript (ES6)</p>
            </li>
            <li>
              <img src='/images/image 2.png' alt='Reactjs'/>
              <p>ReactJs</p>
            </li>
            <li>
              <img src='/images/image 3.png' alt='Git'/>
              <p>Git</p>
            </li>
            <li>
              <img src='/images/image 4.png' alt='Nodejs'/>
              <p>NodeJs</p>
            </li>
          </ul>
        </div>

        <div className='design-skills'>
          <div>
            <h1>Design</h1>
          </div>
          <ul>
            <li>
              <img src='/images/image 5.png' alt='Figma'/>
              <p>Figma</p>
            </li>
            <li>
              <img src='/images/image 6.png' alt='Adobexd'/>
              <p>Adobe Xd</p>
            </li>
            <li>
              <img src='/images/image 7.png' alt='Photoshop'/>
              <p>Photoshop</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}



function MyProjects(){
  return(
    <section id="projects-section">
      
    </section>
  )
}

