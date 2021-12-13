import React, { useContext } from 'react';
import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Addr from '../../img/address.png';
import { useRef , useState } from 'react';
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
                cancelCourse();
            }, (error) => {
                console.log(error.text);
            });
    }

    const cancelCourse = () => { 
        document.getElementById("formReset").reset();
      }


    return (
        <div className='c'>
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
                    </div>
                </div>
                <div className="c-right">
                    <p className='c-desc'>
                        <b>Hi there, do you need any assistance or contact me?</b> Just fill the form below and send a message.
                        Let's get in touch.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} id='formReset'>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Name' name='user_name' />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Subject' name='user_subject' />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Email' name='user_email' />
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows='5' placeholder='Message' name='message' />
                        <button type='submit'>Submit</button>
                        {done && (
                            <div className='c-form-success'>
                                <h3>Thank you! I'll get back to you soon...</h3>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
