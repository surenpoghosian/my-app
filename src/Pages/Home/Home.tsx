import React, { useEffect, useState, useRef } from "react";
import { IParallax,Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './Home.module.scss'

export const Home: React.FC = () => {
    const [showArrow, setShowArrow] = useState(false);
    const alignCenter = { display: 'flex', alignItems: 'center' }
    const parallax = useRef<IParallax>(null!)


    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        let currentScroll = window.scrollY || document.documentElement.scrollTop;
  
        if (currentScroll > lastScrollTop) {
          console.log("Scrolling down");
        }
  
        setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll); // For Mobile or negative scrolling
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollTop]);

    useEffect(() => {
        setTimeout(() => {
            setShowArrow(true)
        }, 3500);
    }, []);

    return (
        <div className={styles.container}>
            <Parallax pages={window.innerWidth < 1200 ? 4 : 5} ref={parallax}>
                <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center', flexDirection:'column' }}>
                        <div className={styles.avatarWrapper}>
                            <img className={styles.avatar} alt="" src="/assets/avatar.png"/>
                        </div>
                    <div className={styles.titleWrapper}>

                        <p className={`${styles.line_1} ${styles.anim_typewriter}`}>Welcome to My Portfolio</p>
                        {showArrow && <div className={styles.arrowDown} onClick={()=>{parallax.current.scrollTo(1)}}></div>}
                    </div>
                </ParallaxLayer>

                {window.innerWidth < 1200 ?                 
                    <ParallaxLayer offset={0.6} style={{ ...alignCenter, justifyContent: 'flex-start',  maxWidth:'700px' }}>
                        <div className={`${styles.card} ${styles.sticky} ${styles.parallax}`} style={{cursor:'pointer'}} onClick={()=>{window.location.replace('/about')}}> 
                            <h2 >About Me</h2>
                            <p style={{color: 'gray'}}>I'm a 21-year-old software developer with over three years of experience. I have a variety of interests including running, music, motorcycles, and photography. In the past year, I've been actively involved in different IT events and nearly every public event organized by AUA.  In spring 2023, I was recognized as a top performer in a simulated drone racing competition at CSE. This achievement opened doors for me to gain real-life experience at Azatazen, where I flew various types of drones alongside other students, enriching my skills. These experiences also fostered closer relationships with my peers, leading me to participate as an actor and technical director in three film classes. One of the most memorable experiences was at EPIC Jam 3, where I collaborated with a fellow student I knew from our film project to tackle a sustainability challenge. Currently, I'm brimming with energy and eagerly seeking out opportunities.</p>
                        </div>
                    </ParallaxLayer>
                : 
                    <ParallaxLayer sticky={{ start: 1, end: 3.2 }} style={{ ...alignCenter, justifyContent: 'flex-start',  maxWidth:'700px' }}>
                        <div className={`${styles.card} ${styles.sticky} ${styles.parallax}`} style={{cursor:'pointer'}} onClick={()=>{window.location.replace('/about')}}> 
                            <h2 >About Me</h2>
                            <p style={{color: 'gray'}}>I'm a 21-year-old software developer with over three years of experience. I have a variety of interests including running, music, motorcycles, and photography. In the past year, I've been actively involved in different IT events and nearly every public event organized by AUA.  In spring 2023, I was recognized as a top performer in a simulated drone racing competition at CSE. This achievement opened doors for me to gain real-life experience at Azatazen, where I flew various types of drones alongside other students, enriching my skills. These experiences also fostered closer relationships with my peers, leading me to participate as an actor and technical director in three film classes. One of the most memorable experiences was at EPIC Jam 3, where I collaborated with a fellow student I knew from our film project to tackle a sustainability challenge. Currently, I'm brimming with energy and eagerly seeking out opportunities.</p>
                        </div>
                    </ParallaxLayer>
                }

                <ParallaxLayer offset={window.innerWidth < 1200 ? 1.5 : 1} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }} onClick={()=>{window.location.replace('/projects')}}>
                    <div className={`${styles.card} ${styles.parallax}`} style={{cursor:'pointer'}} >
                        <h2>Tech Projects</h2>
                        <img src="/assets/GPU.png" alt="Project" className={styles.cardImage} />
                        <p style={{color: 'gray'}}>Explore my recent work in developing innovative web solutions. I've worked on projects ranging from...</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={window.innerWidth < 1200 ? 1.99999999999 : 1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end'}} onClick={()=>{window.location.replace('/projects')}}>
                    <div className={`${styles.card} ${styles.parallax}`} style={{cursor:'pointer'}}>
                        <h2>Creative Projects</h2>
                        <img src="/assets/camera_1.png" alt="Project" className={styles.cardImage} />
                        <p style={{color: 'gray'}}>Explore my recent creative solutions. I've worked on projects ranging from...</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }} onClick={()=>{window.location.replace('/about')}}>
                    <div className={`${styles.card} ${styles.parallax}`} style={{cursor:'pointer'}}>
                        <h2>Skills & Expertise</h2>
                        <img src="/assets/iMac.png" alt="Skills" className={styles.cardImage} />
                        <p style={{color: 'gray'}}>Proficient in JavaScript, React, Node.js, and more. I have a strong foundation in...</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }} onClick={()=>{window.location.replace('/about')}}>
                    <div className={`${styles.card} ${styles.parallax}`} style={{cursor:'pointer'}}>
                        <h2>Testimonials</h2>
                        <img src="/assets/printer.png" alt="Testimonial" className={styles.cardImage} />
                        <p style={{color: 'gray'}}>"Completed the assigned task professionally and considered feedback on priority." - StartXLabs</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={window.innerWidth < 1200 ? 3 : 4} speed={1.5} style={{ ...alignCenter, justifyContent: 'center', cursor:'pointer', marginTop:'100px' }} onClick={()=>{window.location.replace('/contacts')}}>
                    <div className={`${styles.card} ${styles.parallax} ${styles.contact}`}>
                        <h2>Contact Me</h2>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
};
