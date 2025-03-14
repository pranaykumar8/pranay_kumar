import React from "react";
import profile_img from '../../assets/passport size photo.png';
import theme_pattern from '../../assets/theme_pattern.svg';

import './About.css';


const About = () => {
return(
    <div id='about' className='about'>
    <div className="about-title">
    <h1>About me</h1>
    <img src={theme_pattern} alt=""/>
    </div>
    <div className="about-sections">
        <div className="about-left">
        
        <img src={profile_img} alt=""></img>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I trained in Frontend Development, backend development in Coding Hub Innovations Pvt Ltd.</p>
                <p>My passion for Full Stack Development is not only for creating functional applications but also for delivering an outstanding user experience.</p>

            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML,CSS & JS</p><hr style={{width:"80%"}}/></div>
                <div className="about-skill"><p>JAVA</p><hr style={{width:"80%"}}/></div>
                <div className="about-skill"><p>SPRING BOOT</p><hr style={{width:"65%"}}/></div>
                <div className="about-skill"><p>REACT JS</p><hr style={{width:"68%"}}/></div>
                <div className="about-skill"><p>MySQL</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>ANGULAR</p><hr style={{width:"50%"}}/></div>
            </div>
        </div>

    </div>
    <div className="about-achievements">
        <div className="about-achievement">
            <h1>6</h1>
            <p>MONTHS OF COURSE ON JAVA FULL STACK CERTIFIED</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>6</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        {/* <hr/>
        <div className="about-achievement">
            <h1>4</h1>
            <p>PROJECTS COMPLETED</p>
        </div> */}
    </div>
    </div>
)
}

export default About