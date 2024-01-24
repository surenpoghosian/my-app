import React from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './Home.module.css'

export const Home: React.FC = () => {
    const alignCenter = { display: 'flex', alignItems: 'center' }

    return (
        <div className={styles.container}>
            <div className={styles.background} />

            <Parallax pages={6}>
                <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
                    <h1 className={styles.header}>Welcome to My Portfolio</h1>
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                    <div className={`${styles.card} ${styles.sticky}`}>
                        <h2>About Me</h2>
                        <p>I am a passionate web developer with expertise in modern web technologies...</p>
                    </div>
                </ParallaxLayer>

                {/* <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                    <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
                        <h2>My Projects</h2>
                        <p>Explore my recent work in developing innovative web solutions...</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                    <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
                        <h2>Skills & Expertise</h2>
                        <p>Proficient in JavaScript, React, Node.js, and more...</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={3.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                    <div className={`${styles.card} ${styles.parallax}`}>
                        <h2>Testimonials</h2>
                        <p>What clients and colleagues say about my work...</p>
                    </div>
                </ParallaxLayer> */}

                <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                    <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
                        <h2>My Projects</h2>
                        <img src="/assets/camera_1.png" alt="Project" className={styles.cardImage} />
                        <p>Explore my recent work in developing innovative web solutions. I've worked on projects ranging from...</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                    <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
                        <h2>Skills & Expertise</h2>
                        <img src="/assets/iMac.png" alt="Skills" className={styles.cardImage} />
                        <p>Proficient in JavaScript, React, Node.js, and more. I have a strong foundation in...</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={3.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                    <div className={`${styles.card} ${styles.parallax}`}>
                        <h2>Testimonials</h2>
                        <img src="/assets/hard_drive.png" alt="Testimonial" className={styles.cardImage} />
                        <p>"An exceptional talent in web development..." - Client A. "Delivered outstanding work on time..." - Client B.</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={4.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'center' }}>
                    <div className={`${styles.card} ${styles.parallax} ${styles.contact}`}>
                        <h2>Contact Me</h2>
                        <p>Let's get in touch for collaborations and opportunities...</p>
                    </div>
                </ParallaxLayer>

                {/* Add more layers as needed */}
            </Parallax>
        </div>
    )
};
