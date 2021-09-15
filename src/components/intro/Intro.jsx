import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
export default function Intro() {
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            backDelay: 1500,
            backSpeed: 50,
            showCursor: true,
            strings: ['Python Developer ]','Front-end Developer ]', 'Django-React stack developer ]']
        })
    },[])
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src='assets/man.png' alt='Profile-pic'/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                <h2>Hi There, I'm</h2>
                <h1>Paras Kamble</h1>
                <h4>
                <p>I am a Fresher having experience in web development and Python</p>
                <p>Proficient in JAVASCRIPT, PYTHON, HTML, CSS language.</p>
                <p> Passionate about web-development, cyber-security, tech-realted stuff.</p>
                <p> Looking for an industry that will enable me to increase
                    my skills as an entry-level Full-stack developer</p>
                </h4>
                <br/>
                <h3>[ Full Stack Developer/
                <span ref={textRef}></span></h3>
                <a href="https://drive.google.com/file/d/1DATBgFLuu7X-m6xCTWiRrxSd21zOalK-/view?usp=sharing" download="Paras_Kamble_Full_Stack">For Resume click here</a>
                </div>  
                <a href='#portfolio'>
                    <img src="assets/down.png" alt=""></img>
                </a>             
            </div>
        </div>
    )
}
