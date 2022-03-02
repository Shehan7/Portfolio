import React, { useEffect, useRef } from 'react';
import './intro.css';
import Me from '../../img/me-min.png';
import { init } from 'ityped';

const Intro = () => {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backSpeed:  30,
            backDelay:  1500,
            cursorChar: "_",
            strings: ['BICT(Hons) Undergraduate', 'Software Developer' , 'DevOps Enthusiast']
        })

    }, [])

    return (
        <div className='i' id='intro'>
            <div className='i-left'>
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>Hello there, I am</h2>
                    <h1 className='i-name'>Shehan Somaweera</h1>
                    <div className='i-title'>
                        <div className='i-title-wraper'>
                            <div className='i-title-item'><span ref={textRef}></span>
                            </div>
                            {/* <div className='i-title-item'>Software Developer</div>
                            <div className='i-title-item'>DevOps</div> */}
                        </div>
                    </div>
                    <p className='i-desc'>
                        I'm an undergraduate at University of Sri Jayawardenepura, on BICT(Hons) specializing in
                        Network Technology. I like to seek challenging opportunities to use my skills and improve them.
                    </p>
                </div>
                <div className='i-scroll'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="grey" class="bi bi-mouse" viewBox="0 0 16 16">
                        <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z" />
                    </svg>
                </div>
            </div>
            <div className='i-right'>
                {/* <div className='i-bg'></div> */}
                <div className="i-right-div">
                    <img className='i-img' src={Me} alt="me" />
                </div>
            </div>
        </div>
    )
}

export default Intro
