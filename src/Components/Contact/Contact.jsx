// import React from "react";
// import call_icon from '../../assets/call_icon.svg';
// import location_icon from '../../assets/location_icon.svg';
// import mail_icon from '../../assets/mail_icon.svg';
// import theme_pattern from '../../assets/theme_pattern.svg';
// import './Contact.css';

// const Contact =()=>{



//     const onSubmit = async (event) => {
//         event.preventDefault();
//         const formData = new FormData(event.target);
    
//         formData.append("access_key", "cfada8c2-cdec-44c9-ad78-c3ec4296adfc");
    
//         const object = Object.fromEntries(formData);
//         const json = JSON.stringify(object);
    
//         const res = await fetch("https://api.web3forms.com/submit", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json"
//           },
//           body: json
//         }).then((res) => res.json());
    
//         if (res.success) {
//         alert(res.message);
//         }
//     };


// return (
// <div id='contact' className='contact'>
// <div className="contact-title"><h1>Get in touch</h1>
// <img src={theme_pattern} alt=""></img></div>
// <div className="contact-section"><div className="contact-left">
//     <h1>Let's talk</h1>
//     <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
//     <div className="contact-details">
//         <div className="contact-detail">
//             <img src={mail_icon} alt=""/><p>pranayraos9@gmail.com</p>
//         </div>
//         <div className="contact-detail">
//         <img src={call_icon} alt=""/><p>+91 7997661149</p>
//         </div>
//         <div className="contact-detail">
//         <img src={location_icon} alt=""/><p>Hyderabad, Telangana, India</p>
//         </div>
//     </div>
// </div>
// <form onSubmit={onSubmit} className="contact-right">
//     <label htmlFor="name">Your Name</label>
//     <input type="text" id="name" placeholder="Enter your name" name="name" />

//     <label htmlFor="email">Your Email</label>
//     <input type="email" id="email" placeholder="Enter your email" name="email" />

//     <label htmlFor="message">Write your message here</label>
//     <textarea id="message" name="message" rows="8" placeholder="Enter your message"></textarea>

//     <button type="submit" className="contact-submit">Submit now</button>
// </form>

//         </div>
// </div>
// )
// }
// export default Contact
import { useEffect, useState } from "react";
import call_icon from '../../assets/call_icon.svg';
import github_icon from '../../assets/github.jpg';
import linkedin_icon from '../../assets/linkedin.jpg';
import location_icon from '../../assets/location_icon.svg';
import mail_icon from '../../assets/mail_icon.svg';
import theme_pattern from '../../assets/theme_pattern.svg';
import './Contact.css';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    // Function to update form data state
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // Validate form to enable/disable button
    useEffect(() => {
        const { name, email, message } = formData;
        setIsButtonDisabled(!(name.trim() && email.trim() && message.trim()));
    }, [formData]);

    const onSubmit = async (event) => {
        event.preventDefault();
        const submissionData = { ...formData, access_key: "cfada8c2-cdec-44c9-ad78-c3ec4296adfc" };

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(submissionData)
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
            setFormData({ name: "", email: "", message: "" }); // Reset form
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className="contact-details">
                    <div className="contact-detail">
                    <img src={mail_icon} alt="Email" />
                    <a href="mailto:pranayraos9@gmail.com"><p>pranayraos9@gmail.com</p></a>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="Phone" />
                    <a href="tel:+917997661149"><p>+91 7997661149</p></a>
                </div>
                        <div className="contact-detail">
                    <img src={location_icon} alt="Location" />
                    <a href="https://www.google.com/maps/place/Hyderabad,+Telangana,+India/" target="_blank" rel="noopener noreferrer">
                        <p>Hyderabad, Telangana, India</p>
                    </a>
                </div>
                <div className="contact-detail">
                    <img src={linkedin_icon} alt="LinkedIn" />
                    <a href="https://www.linkedin.com/in/pranaykumardodle/" target="_blank" rel="noopener noreferrer">
                        <p>LinkedIn</p>
                    </a>
                </div>
                <div className="contact-detail">
                    <img src={github_icon} alt="GitHub" />
                    <a href="https://github.com/pranaykumar8" target="_blank" rel="noopener noreferrer">
                        <p>GitHub</p>
                    </a>
                </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} required />

                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} required />

                    <label htmlFor="message">Write your message here</label>
                    <textarea id="message" name="message" rows="8" placeholder="Enter your message" value={formData.message} onChange={handleChange} required></textarea>

                    <button type="submit" className="contact-submit" disabled={isButtonDisabled}>
                        Submit now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
