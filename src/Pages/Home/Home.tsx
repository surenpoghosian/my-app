import React, { useEffect, useState, useRef } from "react";
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from './Home.module.scss';

export const Home: React.FC = () => {
    const [showArrow, setShowArrow] = useState(false);
    const alignCenter = { display: 'flex', alignItems: 'center' };
    const parallax = useRef<IParallax>(null!);

    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const currentScroll = window.scrollY || document.documentElement.scrollTop;
        setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
      };

      const debouncedHandleScroll = debounce(handleScroll, 100);
      window.addEventListener('scroll', debouncedHandleScroll);

      return () => {
        window.removeEventListener('scroll', debouncedHandleScroll);
      };
    }, [lastScrollTop]);

    useEffect(() => {
        setTimeout(() => {
            setShowArrow(true);
        }, 3500);
    }, []);

    return (
        <div className={styles.container}>
            <Parallax pages={3} ref={parallax}>
                <ParallaxLayer offset={0} speed={0.2} style={{ ...alignCenter, justifyContent: 'center', flexDirection:'column' }}>
                    <div className={styles.avatarWrapper}>
                        <img className={styles.avatar} alt="" src="/assets/avatar.png"/>
                    </div>
                    <div className={styles.titleWrapper}>
                        <p className={`${styles.line_1} ${styles.anim_typewriter}`}>Welcome to My Portfolio</p>
                        {showArrow && <div className={styles.arrowDown} onClick={()=>{parallax.current.scrollTo(1)}}></div>}
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={0.8}
                    style={{ ...alignCenter, justifyContent: 'center' }}
                >
                    <div className={`${styles.card} ${styles.parallax}`} style={{ cursor: 'pointer', maxWidth: '80%',  overflowY: 'auto', padding: '20px' }} onClick={() => { window.location.replace('/about') }}>
                        <h2>About Me</h2>
                        <p style={{ color: 'gray' }}>
                            I'm a 21-year-old software developer with over three years of experience. I have a variety of interests including running, music, motorcycles, and photography.
                            <br /><br />
                            In the past year, I've been actively involved in different IT events and nearly every public event organized by AUA. In spring 2023, I was recognized as a top performer in a simulated drone racing competition at CSE.
                            <br /><br />
                            This achievement opened doors for me to gain real-life experience at Azatazen, where I flew various types of drones alongside other students, enriching my skills. These experiences also fostered closer relationships with my peers, leading me to participate as an actor and technical director in three film classes.
                            <br /><br />
                            One of the most memorable experiences was at EPIC Jam 3, where I collaborated with a fellow student I knew from our film project to tackle a sustainability challenge.
                        </p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={window.innerWidth < 1200 ? 1.6 : 1.3}
                    speed={1}
                    style={{ ...alignCenter, justifyContent: 'center', marginTop: '100px' }}
                >
                    <div className={`${styles.card} ${styles.parallax}`} style={{ cursor: 'pointer' }} onClick={() => { window.location.replace('/projects') }}>
                        <h2>My Projects</h2>
                        <img src="/assets/GPU.png" alt="Project" className={styles.cardImage} />
                        <p style={{ color: 'gray' }}>Explore my recent work in developing innovative software solutions.</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={1.5}
                    style={{ ...alignCenter, justifyContent: 'center', cursor: 'pointer', marginTop: '100px' }} // Added marginTop for visibility
                >
                    
                    <div 
                        className={`${styles.card} ${styles.parallax} ${styles.contact}`} 
                        onClick={() => { window.location.replace('/contacts') }}
                    >
                        <h2>Contact Me</h2>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
};

// Utility function for debounce
function debounce<T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout>;

    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
        const context = this;

        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}