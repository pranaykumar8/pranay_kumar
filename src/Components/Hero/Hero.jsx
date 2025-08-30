import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_img from '../../assets/passport size photo.png';
import './Hero.css';
const Hero = () => {


  // const handleResumeClick = () => {
  //   window.open("/PranayKumar_Resume.pdf", "_blank"); // Opens the PDF in a new tab
  // };
//   const handleResumeClick = () => {
//   window.open(`${process.env.PUBLIC_URL}/PranayKumar_Resume.pdf`, "_blank");
// };
const handleResumeClick = () => {
  window.open("/pranay_kumar/PranayKumar_Resume.pdf", "_blank");
};



  return(

    <div id='home' className="hero">
<img src={profile_img} alt=""></img>
<h1><span>I'm Pranay Kumar Dodle,</span> Java Full Stack Developer based in India.</h1>
<p>I am a highly motivated Full Stack Developer eager to contribute to a reputed organization. With a passion for problem-solving and continuous learning, I strive to excel in a dynamic environment.</p>
<div className="hero-action">
<div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
<div className="hero-resume" onClick={handleResumeClick} style={{ cursor: "pointer" }}>My Resume</div>
    </div>
    </div>
    )
}

export default Hero