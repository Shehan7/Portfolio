import React, { useContext } from 'react';
import { ThemeContext } from '../../context';
import './Certifications.css';
import IMG1 from '../../img/cyber01.JPG';
import IMG2 from '../../img/az104.png';
import IMG3 from '../../img/tech.JPG';


const Certifications = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='ce' style={{ backgroundColor: darkMode && "#222", color: darkMode && "white" }}>
            <h1 className='ce-title'>Certifications</h1>
            <h3 className='s-sub'>I have done several interesting certifications and some of them are mentioned below.
            Visit my <a className='ce-a' target="_blank" rel="noreferrer" href="https://lk.linkedin.com/in/shehan-somaweera">LinkedIn Profile</a> to see all certifications.</h3>
            <div className="ce-main" >
                <div className="ce-left">   
                    <div className="card" style={{ backgroundColor: darkMode && "#444" }}>
                        <img src={IMG1} alt="Avatar" style={{ width: '100%' }} />
                        <div className="container">
                            <h4><b>The Complete Cyber Security Course :
                                Hackers Exposed</b></h4>
                            <p>Certificate by Nathan House in StationX, on
                                Udemy online academy</p>
                        </div>
                    </div>
                </div>
                <div className="ce-mid">
                    <div className="card" style={{ backgroundColor: darkMode && "#444" }}>
                        <img src={IMG2} alt="Avatar" style={{ width: '100%' }} />
                        <div className="container">
                            <h4><b>AZ-104: Microsoft Azure Administrator Associate</b></h4>
                            <p>Certified from Microsoft on AZ104 examination</p>
                        </div>
                    </div>
                </div>
                <div className="ce-right">
                    <div className="card" style={{ backgroundColor: darkMode && "#444" }}>
                        <img src={IMG3} alt="Avatar" style={{ width: '100%' }} />
                        <div className="container">
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
