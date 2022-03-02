import React, { useContext } from 'react';
import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Addr from '../../img/address.png';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context';



const Contact = () => {

    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ul04yxx', 'template_9wwu5bo', formRef.current, 'user_jQW0PBjXMIp6ZXCJ0rXin')
            .then((result) => {
                console.log(result.text);
                setDone(true);
                formReset();
            }, (error) => {
                console.log(error.text);
            });
    }

    const formReset = () => {
        document.getElementById("formReset").reset();
    }


    return (
        <div className='c' style={{ backgroundColor: darkMode && "#222" }}>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Reach me & let's discuss</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />+94 71 61 98 568
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />shehan.somaweera@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Addr} alt="" className="c-icon" />No:4/66, Konakalagala, Alawathugoda.
                        </div>

                        <div>
                            <ul className="social-network social-circle">
                                <li><a href="https://www.facebook.com/people/Shehan-Somaweera/100009181860205/" className="icoFacebook" title="Facebook" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="https://www.instagram.com/shehan_somaweera/" className="icoInstagram" title="Instagram" target="_blank" rel="noreferrer"><i className="fa fa-instagram" ></i></a></li>
                                <li><a href="https://lk.linkedin.com/in/shehan-somaweera" className="icoLinkedin" title="Linkedin" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>


                    </div>
                </div>
                <div className="c-right">
                    <p className='c-desc'>
                        <b>Hi there, do you need any assistance or to contact me?</b> Just fill the form below and send a message.
                        Let's get in touch.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} id='formReset'>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder='Name' name='user_name' required />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder='Subject' name='user_subject' required/>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="email" placeholder='Email' name='user_email' required />
                        <textarea style={{ backgroundColor: darkMode && "#333", color: darkMode && 'white' }} rows='5' placeholder='Message' name='message' required/>
                        <button type='submit'>Send</button>
                        {done && (
                            <div className='c-form-success'>
                                <p>Thank you! I'll get back to you soon...</p>
                            </div>
                        )}
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Contact
