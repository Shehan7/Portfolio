import React, { useContext } from 'react';
import { ThemeContext } from '../../context';
import './Certifications.css';
import IMG1 from '../../img/cyber01.JPG';
import IMG2 from '../../img/ndg.JPG';
import IMG3 from '../../img/tech.JPG';


const Certifications = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='ce' style={{ backgroundColor: darkMode && "#222", color: darkMode && "white" }}>
            <h1 className='ce-title'>Certifications</h1>
            <h3 className='s-sub'>I have done several interesting certifications and some of them are mentioned below.
            Visit my <a className='ce-a' target="_blank" rel="noreferrer" href="https://lk.linkedin.com/in/shehan-somaweera">LinkedIn Profile</a> to see all certifications.</h3>
            <div className="ce-main" style={{ color: darkMode && "black" }}>
                <div className="ce-left">   
                    <div class="card">
                        <img src={IMG1} alt="Avatar" style={{ width: '100%' }} />
                        <div class="container">
                            <h4><b>The Complete Cyber Security Course :
                                Hackers Exposed</b></h4>
                            <p>Certificate by Nathan House in StationX, on
                                Udemy online academy</p>
                        </div>
                    </div>
                </div>
                <div className="ce-mid">
                    <div class="card">
                        <img src={IMG2} alt="Avatar" style={{ width: '100%' }} />
                        <div class="container">
                            <h4><b>NDG Linux Unhatched</b></h4>
                            <p>Certificate from Cisco
                                Networking Academy</p>
                        </div>
                    </div>
                </div>
                <div className="ce-right">
                    <div class="card">
                        <img src={IMG3} alt="Avatar" style={{ width: '100%' }} />
                        <div class="container">
                            <h4><b>Technical Support Fundamentals</b></h4>
                            <p>Certificate from Google on Coursera online academy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certifications
