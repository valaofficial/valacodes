import React from 'react';
import "./Landing.css"
import Navbar from './Navbar'
import data from  './projects.json'

import { Link, animateScroll as scroll } from "react-scroll";
function Landing() {
  console.log(data.projects)
  return (
    <section id="SiteSection">
        <Navbar/>
        <IntroSection/>
        <About/>
        <Skills/>
        <MyProjects/>
        <Contact/>
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
                user experiences for you  
            </p>

            
          <Link spy={true} smooth={true} duration={300} to='contact-section'>
            <button className='intro-cta'>
              Let's Build Stuff
            </button>
          </Link>
          </div>

          <div className='intro-image'>
            <img src='/images/profile-pic.png' alt='Hyelavala'/>
          </div>
        </div>

        <div className='downBtn'>
          <Link spy={true} smooth={true} duration={300} to='about-section'>
            <img src='/images/Down.png' alt='Down'/>
          </Link>
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
        my first Hackathon and fell in love with the joys of coding and building things
        </p>

        <p>
        Since then i’ve worked on a few personal & freelance
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
              <img src='/images/tailwind.png' alt='Tailwind'/>
              <p>Tailwind</p>
            </li>
            {/* <li>
              <img src='/images/image 4.png' alt='Nodejs'/>
              <p>NodeJs</p>
            </li> */}
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

      <h1>My Projects</h1>
      {data.projects?
      <div className='project-card-div'>
        {data.projects.map(project =>(
          <div className='project-card'>
            <div className='project-img'>
              <img src='/images/folder.png' alt='Folder'/>
            </div>
            <h3 className='project-title'>{project.title}</h3>
            <p className='project-desc'>{project.desc}</p>
            <div className='project-stack'>
              {project.tech_stack.map(lang =>(
              <h5>{lang}</h5>
              ))}
            </div>
            <div className='project-link-div'>
              <a className='project-link' href={project.link}>Visit</a>
            </div>
          </div>
        ))}
      </div>
      :null}
    </section>
  )
}



function Contact(){
  return(
    <section id="contact-section">
      <h1 className='contact-head'>Get In Touch</h1>
      <h3 className='contact-msg'>I'm currently open to working with various teams of creative designers and developers.
        <br/>
        If you think we might be a good fit for one another
      </h3>
      
      <div className='contact-btn'>
        <a href='mailto: mhyelavala@gmail.com'>Message Me</a>
      </div>

      <h5 className='contact-online'>Contact me online</h5>
      <div className='contact-social-div'>
      <a className='contact-social' href='https://github.com/valaofficial'>
        <img src='/images/github.png' alt='Github'/>
      </a>
      <a className='contact-social' href='https://www.linkedin.com/in/maina-hyelavala-99b08a129/'>
      <img src='/images/linkedin.png' alt='Linkedin'/>
      </a>
      <a className='contact-social'href='https://twitter.com/itz_vala'>
      <img src='/images/twitter.png' alt='Twitter'/>
      </a>
      </div>
      <hr/>
      <p className='footer-txt'>Designed & Developed by Maina Hyelavala</p>
    </section>
  )
}
