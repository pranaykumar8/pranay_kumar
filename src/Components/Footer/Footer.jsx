import React from 'react'
//import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import './Footer.CSS'

const Footer =()=>{
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    {/* <img src={footer_logo} alt="PRANAY" /> */}
                    <img src="" alt="PRANAY KUMAR" /> 
                    <p>Iam a full stack developer from, India with graduation in VBIT and 6 months of training in CodingHub Innovations pvt Ltd.</p>
                    </div>
                    <div className="footer-top-right">
                        <div className="footer-email-input">
                            <img src={user_icon} alt=""/>
                            <input type="email" placeholder='Enter your email'/>
                        </div>
                        <div className="footer-subscribe">Subscribe</div>
                    </div>
                    </div>
                    <hr />
                    <div className="footer-bottom">
                        <p className="footer-bottom-left">© 2025 Pranay Kumar Dodle. All rights reserved.</p>
                        <div className="footer-bottom-right">
                            <p>Term of Services</p>
                            <p>Privacy Policy</p>
                            <p>Connect with me</p>
                        </div>
                    </div>
        </div>
    )
}
export default Footer