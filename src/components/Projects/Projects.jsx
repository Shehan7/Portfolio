import React, { useContext } from 'react';
import { ThemeContext } from '../../context';
import './Projects.css';
import IMG1 from '../../img/th1.jpg';
import IMG2 from '../../img/th2.jpg';

import IMG4 from '../../img/lak1.jpg';
//import IMG5 from '../../img/lak2.jpg';
import IMG6 from '../../img/sample.png';
import IMG7 from '../../img/th3.jpg';
import IMG8 from '../../img/dash1.jpg';
import IMG9 from '../../img/dash2.jpg';
import IMG10 from '../../img/dash3.jpg';
import IMG11 from '../../img/th4.jpg';
import IMG12 from '../../img/mine.jpg';
import Popup from 'reactjs-popup';


// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// const responsive = {
//     0: {
//         items: 2,
//     },
//     450: {
//         items: 2,
//     },
//     600: {
//         items: 3,
//     },
//     1000: {
//         items: 5,
//     },
// };


const Projects = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='pr' style={{ backgroundColor: darkMode && "#222", color: darkMode && "white" }}>

        {/* <OwlCarousel className='owl-theme' 
                        loop={true}
                        margin={8} 
                        nav dots={false} 
                        thumbnails 
                        items="5" 
                        autoplay 
                        autoplayTimeout="2000"
                        responsive={responsive}  
                    >

            <div className='item'>
                <img alt="2" src="https://www.vhv.rs/file/max/13/133098_bird-logo-png.png" />
            </div>
            <div className='item'>
                <img alt="3" src="https://www.vhv.rs/file/max/13/133098_bird-logo-png.png" />
            </div>
            <div className='item'>
                <img alt="4" src="https://www.vhv.rs/file/max/13/133098_bird-logo-png.png" />
            </div>
            <div className='item'>
                <img alt="5" src="https://www.vhv.rs/file/max/13/133098_bird-logo-png.png" />
            </div>
            <div className='item'>
                <img alt="6" src="https://www.vhv.rs/file/max/13/133098_bird-logo-png.png" />
            </div>
            
            
        </OwlCarousel> */}

            <h1 className='pr-title'>Projects</h1>
            <h3 className='s-sub'>Here are few of my projects; with the details. Feel free to explore.</h3>
            <div className="pr-main" >
                <div className="pr-left">
                    <Popup trigger={
                        <div className="pr-card" style={{ backgroundColor: darkMode && "#444" }}>
                            <img src={IMG1} alt="Avatar" style={{ width: '100%' }} />
                            <div class="pr-container">
                                <h4><b>Laknipayum</b></h4>

                            </div>
                        </div>} position="center">
                        <div className='pr-popup' >
                            <div className='pr-pop-img'>
                                <img src={IMG4} alt='leos' className='pr-pop-img-in' />
                                
                            </div>
                            <div className="pr-pop-text">
                                <div className='pr-pop-text-in'>
                                    <h2>Laknipayum Project</h2>
                                    <p>
                                        Laknipayum is an online store which promotes Sri Lankan eco-friendly hand crafts.
                                        Their effort is to make Sri Lankan eco-friendly hand crafts affordable while improving
                                        the livelihood of the local designers. 
                                        <br />
                                        The website is fully responsive and provides functional service as an e-commerce website
                                        
                                        <br /><br />

                                        <a href='https://www.laknipayum.com' target="_blank" rel="noreferrer">www.laknipayum.com </a><br />
                                        <b>CMS &emsp; : WordPress Platform </b>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </Popup>
                </div>
                <div className="pr-mid">
                    <Popup trigger={
                        <div className="pr-card" style={{ backgroundColor: darkMode && "#444" }}>
                            <img src={IMG2} alt="Avatar" style={{ width: '100%' }} />
                            <div className="pr-container">
                                <h4><b>Sample Project</b></h4>

                            </div>
                        </div>} position="center">
                        <div className='pr-popup'>
                            <div className='pr-pop-img'>
                                <img src={IMG6} alt='leos' className='pr-pop-img-in' />

                            </div>
                            <div className="pr-pop-text">
                                <div className='pr-pop-text-in'>
                                    <h2>Sample Project</h2>
                                    <p>
                                        I designed the sample project to improve and represent my skills on React.js platform.
                                        The project has many npm modules used and react hooks such as useState and useEffect.
                                        Additionaly there are arrow functions and HashRouter used in the project. <br /><br />

                                        <a href='https://shehan-reactapp1.netlify.app/#/' target="_blank" rel="noreferrer">shehan-reactapp1.netlify.app </a><br />
                                        <b>CMS &emsp; : React.js on Netlify platform </b>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </Popup>
                </div>
                <div className="pr-right">
                    <Popup trigger={
                        <div className="pr-card" style={{ backgroundColor: darkMode && "#444" }}>
                            <img src={IMG7} alt="Avatar" style={{ width: '100%' }} />
                            <div className="pr-container">
                                <h4><b>Dashboard Projects</b></h4>

                            </div>
                        </div>} position="center">
                        <div className='pr-popup'>
                            <div className='pr-pop-img'>
                                <img src={IMG8} alt='leos' className='pr-pop-img-in' />
                                <img src={IMG9} alt='leos' className='pr-pop-img-in' />
                                <img src={IMG10} alt='leos' className='pr-pop-img-in' />

                            </div>
                            <div className="pr-pop-text">
                                <div className='pr-pop-text-in'>
                                    <h2>Dashboard Projects</h2>
                                    <p>
                                        In the internship period, I had the chance to develop the front end of few admin
                                        dashboard tasks of two projects, called CCC Foundation and ARGO. <br /><br />


                                        <b>CMS &emsp; : Amazon Web Services (AWS) </b>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </Popup>
                </div>
                <div className="pr-right-next">
                    <Popup trigger={
                        <div className="pr-card" style={{ backgroundColor: darkMode && "#444" }}>
                            <img src={IMG11} alt="Avatar" style={{ width: '100%' }} />
                            <div className="pr-container">
                                <h4><b>My Web-CV / Portfolio</b></h4>

                            </div>
                        </div>} position="center">
                        <div className='pr-popup'>
                            <div className='pr-pop-img'>
                                <img src={IMG12} alt='leos' className='pr-pop-img-in' />

                            </div>
                            <div className="pr-pop-text">
                                <div className='pr-pop-text-in'>
                                    <h2>My Portfolio Project</h2>
                                    <p>
                                        I developed this portfolio using React.js, with functional components. There is the 
                                        "Dark Mode" created using context API's and the contact form is developed with 
                                        Email JS
                                        <br />
                                        These popups are developed with react-popups and custom made styles. You can exit the 
                                        popup by clicking the outbound area.
                                        <br /><br />


                                        <b>CMS &emsp; : React.js on Netlify platform </b>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </Popup>
                </div>
            </div>
            <center>
            <div className='CV-area'>
                <p>To get more details about me;</p>
                <a href="https://drive.google.com/file/d/1hGIyi0XC11F7MCvCpPboZDXBM4Av0ZXO/view?usp=sharing" target="_blank" rel="noreferrer">
                <button>Download CV</button></a>
            </div>
            </center>
        </div>
    )
}

export default Projects
