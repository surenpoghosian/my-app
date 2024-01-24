import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from './Projects.module.css';

export const Projects: React.FC = () => {
    const alignCenter = { display: 'flex', alignItems: 'center' };

    return (
        <div className={styles.container}>
            <div className={styles.background} />

            <Parallax pages={4}>
                <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
                    <h1 className={styles.header}>My Projects</h1>
                </ParallaxLayer>

                <ParallaxLayer offset={0.5} speed={1} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                    <div className={`${styles.card}`}>
                        <h2>Project A</h2>
                        <img src="/assets/project_a.png" alt="Project A" className={styles.cardImage} />
                        <p>A web application using React and Node.js. Check it out on <a href="https://github.com/user/project-a" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1.5} speed={1} style={{ ...alignCenter, justifyContent: 'center' }}>
                    <div className={`${styles.card} ${styles.blue}`}>
                        <h2>Project B</h2>
                        <img src="/assets/project_b.png" alt="Project B" className={styles.cardImage} />
                        <p>An innovative machine learning project. Watch the demo on <a href="https://www.youtube.com/watch?v=videoId" target="_blank" rel="noopener noreferrer">YouTube</a>.</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={2.5} speed={1} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                    <div className={`${styles.card} ${styles.purple}`}>
                        <h2>Project C</h2>
                        <img src="/assets/project_c.png" alt="Project C" className={styles.cardImage} />
                        <p>A mobile app developed with React Native. Explore the code on <a href="https://github.com/user/project-c" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={3.5} speed={1} style={{ ...alignCenter, justifyContent: 'center' }}>
                    <div className={`${styles.card}`}>
                        <h2>More Projects</h2>
                        <p>Discover more of my work on <a href="https://github.com/user" target="_blank" rel="noopener noreferrer">my GitHub profile</a>.</p>
                    </div>
                </ParallaxLayer>

                {/* Add more layers as needed */}
            </Parallax>
        </div>
    );
};
