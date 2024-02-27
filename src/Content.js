import React from 'react'
import './content.css'
import { FaGithub,FaLinkedin,FaInstagram,FaFacebook,FaJava,FaHtml5,FaCss3Alt,FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
const Content = () => {
  return (
    <header className='main'>
    <div className='header'>
    <div className='title1'><p><span>P</span>ORTFOILO</p> </div>
    <div className='title2'>
        <ul className='nav'>
            <ol ><a className='about' href="#about"> About Me</a></ol>
            <ol ><a className='skills' href="#skills">Skills</a></ol>
            <ol ><a className='edu' href="#edu">Education</a></ol>
            <ol ><a className='project' href="#pro"> Projects</a></ol>
        </ul>
    </div>
    </div>
   
    <div className='conatain'>   
        <div className='main1'>
        <p className='lineUp'>HI...I'M,MANIMARAN <br />SOFTWARE DEVELOPER</p>
        </div>
        <div className='about1' id='about'>
          <div className='ab1'>
           <p>About Me...</p> 
          <a href="#" className='gitico'><FaGithub /> Github</a> <br /> <br />
          <a href="#" className='inico'><FaLinkedin /> Linkedin</a><br /> <br />
          <a href="#" className='fbico'><FaFacebook /> Facebook</a><br /><br />
          <a href="#" className='insico'><FaInstagram /> Instagram</a><br />
          </div>
          <div className='ab2'>
            <p>Motivated and detail-oriented recent graduate with a Electronic and communication engineering seeking an entry-level position in Software developer. Proficient in Java programming, C programming, Mysql ,HTML and CSS,Javascript, React JS skills, with a strong foundation in embedded and fullstack projects. Eager to contribute a fresh perspective and learn from experienced professionals to contribute effectively to your team.</p>
          </div>
        </div>
        <div className='skill1' id='skills'>
          <div className='sk1'>
           <p>My Skills...</p> 
           <p>In Programming Languages</p>
          </div>
          <div className='sk2'>
            <div className='java'> <FaJava className='javaico' /> <p className='jt'>Java Programming</p></div>
            <div className='html'><FaHtml5 className='htmlico' /> <p className='ht'>HTML 5</p></div>
            <div className='css'><FaCss3Alt className='cssico'/> <p className='ct'>CSS 3</p></div>
            <div className='js'><IoLogoJavascript className='jsico'/> <p className='jst'>JavaScript</p></div>
            <div className='react'><FaReact className='rico'/> <p className='rjst'>React JS</p></div>
            </div>          
        </div>
        <div className='education1' id='edu'>
        <p className='edup'>EDUCATION:</p>
       
        <div className='educontain'>
          <div className='edu1'>
            <p> KARPAGAM COLLEGE OF ENGINEERING</p>
            <p> B.E ELECTRONICS AND COMMUNICATION ENGINEERING</p>
            <p> CGPA: 8.34 till VI semester</p>
            <p> 2020-2024</p>
          </div>
          <div className='edu2'>
            <p> VELAMMAL MATRIC HIGHER SECONDARY SCHOOL</p>
            <p> HSC</p>
            <p> 65.66%</p>
            <p> 2018-2020</p>
          </div>
          <div className='edu3'>
            <p> VELAMMAL MATRIC HIGHER SECONDARY SCHOOL</p>
            <p> SSLC</p>
            <p> 73.44%</p>
            <p> 2016-2018</p>
          </div>
          </div>
    </div>
    <div className='project1' id='pro'>
    <p className='edup'>My Works:</p>
       <div className='procontain'>
         <div className='pro1'>
          <h3>Simple calculator us React JS</h3>
          <p>A simple calculator using React.js provides a user-friendly interface for performing basic arithmetic calculations, utilizing React's component-based architecture</p>
          <a href="https://manimaran2002.github.io/Simplecalculator-react/" className='ld' target="_blank">Live website</a>
         </div>
         <div className='pro2'>
         <h3>Weather app using React JS</h3>
          <p>A Weather App API using React.js leverages React's component-based architecture to provide users with real-time weather information fetched from a weather API, all presented through an intuitive and visually appealing interface</p>
          <a href="https://manimaran2002.github.io/weather-app/" className='ld' target="_blank">Live website</a>
         </div>
         <div className='pro3'>
         <h3>StopWatch App using JavaScript</h3>
          <p>A Stopwatch App implemented in JavaScript provides users with a simple yet effective tool for measuring time intervals, offering features like start, stop, lap, and reset in a user-friendly interface.</p>
          <a href="https://manimaran2002.github.io/stopwatch-javascript/" className='ld' target="_blank">Live website</a>
         </div>
         </div>
    </div>
    <footer>
    <div className='footer'>
      <div className='f1'>
       <h2>Crafted by Maara</h2> 
       <h2>with love and tech</h2> 
      </div>
      <div className='f2'>
      <h3> Quick Links: </h3>
      <ul className='navf'>
            <ol ><a className='aboutf' href="#about"> About Me</a></ol>
            <ol ><a className='skillf' href="#skills">Skills</a></ol>
            <ol ><a className='eduf' href="#edu">Education</a></ol>
            <ol ><a className='prof' href="#pro"> Projects</a></ol>
        </ul>
     </div>
     <div className='f3'>
      <form action="post" className='formcontent'>
        <h3>For any Queries:</h3>
        <label htmlFor="form">
          <input type="text" className='f3na' placeholder='Enter your name' />
        </label>
        <label htmlFor="form">
          <input type="email" className='f3em' placeholder='Enter your Email' />
        </label>
        <label htmlFor="form">
          <input type="text" className='f3ph' placeholder='Enter your Moblie Number' />
        </label>
        <button className='f3but'>Submit</button>
      </form>
     </div>
    </div>
    </footer>
    </div>
    </header>
  )
}

export default Content