import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div className='s-main'>
            <h1 className='s-title'>SKILLS</h1>
            <h3 className='s-sub'>The below fields are a brief representation of my technical and personal skills</h3>
            <br />
            <div className="s">


                <div className='s-left'>

                    <h3 className='s-subtitle'>TECHNICAL SKILLS</h3>
                    
                    <p>Cloud App Deployment (Azure, Netlify)</p>
                    <div class="s-container">
                        <div class="skills cloud">60%</div>
                    </div>

                    <p>GitHub, BitBucket</p>
                    <div class="s-container">
                        <div class="skills git">75%</div>
                    </div>

                    <p>Web Development (React.js | WordPress)</p>
                    <div class="s-container">
                        <div class="skills web">80%</div>
                    </div>
                    
                    <p>Server Toubleshooting (Migration,SSL...etc.)</p>
                    <div class="s-container">
                        <div class="skills server">70%</div>
                    </div>

                    <p>Linux (Scripting, Using tools...etc.)</p>
                    <div class="s-container">
                        <div class="skills linux">40%</div>
                    </div>

                    <br />
                </div>
                <div className="s-right">

                    <h3 className='s-subtitle'>PERSONAL SKILLS</h3>
                    
                    <p>Time Management</p>
                    <div class="s-container">
                        <div class="skills time">90%</div>
                    </div>

                    <p>Fast Learner</p>
                    <div class="s-container">
                        <div class="skills fl">95%</div>
                    </div>

                    <p>Creativity</p>
                    <div class="s-container">
                        <div class="skills creative">95%</div>
                    </div>

                    <p>Team Work</p>
                    <div class="s-container">
                        <div class="skills team">95%</div>
                    </div>

                    <p>Leadership</p>
                    <div class="s-container">
                        <div class="skills lead">85%</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills
