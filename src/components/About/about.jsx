import React from 'react';
import './about.css';

const about = () => {
    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card-bg"></div>
                <div className="a-card">
                    {/* <img src="" alt="" className="a-img" /> */}
                    <iframe className='a-img' src="https://ntmaker.gfto.ru/newneontexten/?image_height=600&image_width=400&image_font_shadow_width=30&image_font_size=80&image_background_color=1F1F1F&image_text_color=FF91A9&image_font_shadow_color=F7406B&image_url=&image_text=About Me&image_font_family=Nickainley&" frameborder='no' scrolling='no' width="400" height="600" title='about me'></iframe>

                </div>
            </div>
            <div className="a-right">
                <h1 className='a-title'>About Me</h1>
                <p className='a-sub'>
                    
                </p>
                <p className='a-desc'>
                    Undergraduate in BICT(Hons) at University of Sri Jayewardenepura, specializing in Networking. 
                    An experienced Software Developer with hands on e-commerce web development experience in 
                    React.js on Node.js platform and Wordpress platform. Also an experienced Analytics & 
                    Content Writer with a demonstrated history of working in the digital marketing and advertising 
                    industry. Skilled in Python (Programming Language), C programming, Responsive Web Design with 
                    React JS with API's / Wordpress with PHP, Linux scripting, MS Azure deployments, Adobe Softwares 
                    and Creative Problem Solving. A fast learner with the ability to work with any team to achieve a target.
                </p>

            </div>
        </div>
    )
}

export default about
