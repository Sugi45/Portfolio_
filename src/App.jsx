import React from 'react'
import './App.css'
import html from './assets/images/html.png'
import css from './assets/images/CSS-Logo.png'
import javascript from './assets/images/javaScript-Logo.png'
import bootstrap from './assets/images/bootstrap.png'
import mysql from './assets/images/mysql-logo.png'
import react from './assets/images/react-js.jpg'
import node from './assets/images/node-js.png'
import java from './assets/images/java-Logo.jpg'
import mahaclinic from './assets/images/mahac.png'
import port from './assets/images/port.png'
import Interior from './assets/images/Interior.png'
export default function App() {
  return (
    <>
    <div className='nav-bar'>
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-md-12'>
    <div className='col-md-4'>
    </div>
    <div className='col-md-6'>
    <div className='nav'>
    <ul>
    <li><b>About</b></li>
    <li><b>Portfolio</b></li>
    <li><b>Contact</b></li>
    </ul>
    </div>
    </div>
    <div className='col-md-2'>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className='nav-link'>
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-md-12'>
    <div className='col-md-6'>
    <p className='name'>SUGITHA P</p>
    <p className='domain'>Full Stack Web Developer</p>
    <button className='btn' type='button'>Contact Me</button>
    </div>
    <div className='col-md-6'>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className='about'>
    <div className='container-fluid'>
    <div className='row'>
    <p className='abt'>ABOUT</p>
    <p className='person-abt'>I am Sugitha, a full-stack web developer with a strong foundation in both front-end and back-end technologies. My skill set includes HTML, CSS, JavaScript, Bootstrap, React, Node.js, and MySQL. I specialize in creating dynamic and responsive web applications, with a focus on delivering user-friendly experiences and efficient backend solutions. Whether it's building interactive interfaces or managing databases, I bring a comprehensive approach to web development.</p>
    </div>
    </div>
    </div>
    <div className='skills'>
    <div className='container'>
    <div className='row'>
    <p className='my-skills'>SKILLS</p>
    <div className='col-md-12'>
    <div className='col-md-3'>
    <div className='category'>
    <img src={html} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} />
    <h1 className='html'>HTML</h1>
    </div>
    </div>
    <div className='col-md-3'>
    <div className='category'>
    <img src={css} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} />
    <h1 className='css'>css</h1>
    </div>
    </div>
    <div className='col-md-3'>
    <div className='category'>
    <img src={javascript} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} />
    <h1 className='javascript'>JavaScript</h1>
    </div>
    </div>
    <div className='col-md-3'>
    <div className='category'>
    <img src={bootstrap} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} />
    <h1 className='bootstrap'>Bootstrap</h1>
    </div>
    </div>
    <div className='col-md-3'>
    <div className='category'>
    <img src={react} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} />
    <h1 className='react'>React.js</h1>
    </div>
    </div>
    <div className='col-md-3'>
    <div className='category'>
    <img src={node} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} />
    <h1 className='node'>Node.js</h1>
    </div>
    </div>
    <div className='col-md-3'>
    <div className='category'>
    <img src={mysql} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} />
    <h1 className='mysql'>MySQL</h1>
    </div>
    </div>
    <div className='col-md-3'>
    <div className='category'>
    <img src={java} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} />
    <h1 className='java'>Core Java</h1>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className='portfolio'>
    <div className='container'>
    <div className='row'>
    <div className='col-md-12'>
    <p className='portfol'>PORTFOLIO</p>
    <div className='col-md-6'>
    <p className='pro-one'>PROJECT 1</p>
    <p className='title-one'>Sri Maha Clinic</p>
    <p className='desc-one'>The Sri Maha Clinic website aims to provide a comprehensive online presence for the clinic, offering information about services, doctors, appointments, and patient resources. The site will be user-friendly, mobile-responsive, and easy to navigate.</p>
    </div>
    <div className='col-md-6'>
    <img src={mahaclinic} width={600}/>
    </div>
    <div className='col-md-6'>
    <img src={port} width={600}/>
    </div>
    <div className='col-md-6'>
    <p className='pre-two'>PROJECT 2</p>
    <p className='title-two'>Portfolio</p>
    <p className='desc-two'>The Sri Maha Clinic website aims to provide a comprehensive online presence for the clinic, offering information about services, doctors, appointments, and patient resources. The site will be user-friendly, mobile-responsive, and easy to navigate.</p>
    </div>
    <div className='col-md-6'>
    <p className='pos-the'>PROJECT 3</p>
    <p className='title-the'>Sri Maha Clinic</p>
    <p className='desc-the'>The Sri Maha Clinic website aims to provide a comprehensive online presence for the clinic, offering information about services, doctors, appointments, and patient resources. The site will be user-friendly, mobile-responsive, and easy to navigate.</p>
    </div>
    <div className='col-md-6'>
    <img src={Interior} width={600}/>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div id='contact' className='contact-me'>
    <div className='container'>
    <p className='cont'>Contact Me</p>
    <div className='row'>
    <div className='col-md-12'>
    <div className='col-md-6'>
    <p className='mail'>sugithapandaram0912@gmail.com</p>
    </div>
    <div className='col-md-6'>
    <p className='number'>+91 7695854099</p>
    <p className='location'>chennai,India.</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}
