import React from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './Home.module.css'

export const Home: React.FC = () => {
    const alignCenter = { display: 'flex', alignItems: 'center' }

    return (
        <div className={styles.container}>
            <div className={styles.background} />

            <Parallax pages={5}>
                <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
                    <h1 className={styles.header}>Welcome to My Portfolio</h1>
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                    <div className={`${styles.card} ${styles.sticky}`}>
                        <h2>About Me</h2>
                        <p>I am a passionate web developer...</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                    <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
                        <h2>My Projects</h2>
                        <p>Explore my recent work...</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                    <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
                        <h2>Contact Me</h2>
                        <p>Let's get in touch...</p>
                    </div>
                </ParallaxLayer>

                {/* Add more layers as needed */}
            </Parallax>
        </div>
    )
};
