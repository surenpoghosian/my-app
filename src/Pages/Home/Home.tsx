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
                            <p style={{color: 'gray'}}>I am a 21-year-old software developer with more than three years of experience. My interests include running, music, motorcycles, and photography. Over the past year, I have participated in various IT events and almost every public event hosted at AUA. I can say that this was one of my best decisions. In the spring of 2023, I was listed as a top performer in a simulated drone racing competition at CSE. This achievement led to a real-life experience at Azatazen with other students, where we flew different types of drones and gained valuable experience. These events led to closer communication with fellow students, and I participated as an actor and technical director in three film classes. My most unforgettable experience was at EPIC Jam 3, where I teamed up with a student I knew from our film presentation. We worked intensively for two days to solve a sustainability-related problem. Currently, I’m full of energy and am looking for opportunities where others might still miss them.
                                </p>
                        </div>
                    </ParallaxLayer>
                : 
                    <ParallaxLayer sticky={{ start: 1, end: 3.2 }} style={{ ...alignCenter, justifyContent: 'flex-start',  maxWidth:'700px' }}>
                        <div className={`${styles.card} ${styles.sticky} ${styles.parallax}`} style={{cursor:'pointer'}} onClick={()=>{window.location.replace('/about')}}> 
                            <h2 >About Me</h2>
                            <p style={{color: 'gray'}}>I am a 21-year-old software developer with more than three years of experience. My interests include running, music, motorcycles, and photography. Over the past year, I have participated in various IT events and almost every public event hosted at AUA. I can say that this was one of my best decisions. In the spring of 2023, I was listed as a top performer in a simulated drone racing competition at CSE. This achievement led to a real-life experience at Azatazen with other students, where we flew different types of drones and gained valuable experience. These events led to closer communication with fellow students, and I participated as an actor and technical director in three film classes. My most unforgettable experience was at EPIC Jam 3, where I teamed up with a student I knew from our film presentation. We worked intensively for two days to solve a sustainability-related problem. Currently, I’m full of energy and am looking for opportunities where others might still miss them.
                                </p>
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
