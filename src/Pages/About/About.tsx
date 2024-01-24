import React from "react";
import { Timeline } from 'antd';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './About.module.css'
import Lottie from 'react-lottie';
import * as animationData from '../../animations/Animation - 1706127703218.json'
// import * as animationData from '../../animations/Animation - 1706127713420.json'

export const About: React.FC = () => {
    const alignCenter = { display: 'flex', justifyContent: 'center', alignItems: 'center' };

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <div className={styles.container}>
            <Parallax pages={2}>
                <ParallaxLayer  offset={0.2} speed={0.5} >
                    <div className={styles.cardImageWrapper} style={{flexDirection:'column', alignItems:'center', display:'flex'}}>
                    <Lottie options={defaultOptions}
                        height={300}
                        width={300}
                    />
                        <p className={`${styles.header}`} style={{marginTop:'-50px'}}>About Me</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={0.6} speed={2} >
                    <Timeline
                        reverse={true}
                        style={{ color: 'gray' }}
                        mode="alternate"
                        pending="Suren is busy shaping his future..."
                        items={[
                            {
                                children: 'Working at Invia Investments as a developer for a platform for investors - React js, TypeScript, Jest (2023 Dec - Now)',
                                color: 'blue',
                            },
                            {
                                children: 'Joined Picsart as Junior AI Content Creation Specialist in Growth Marketing (2023 Sep - Now)',
                                color: 'green',
                            },
                            {
                                children: 'Internship at Picsart Academy, working on video creation, Stable Diffusion/Warp Fusion (2023 June - Now)',
                                color: 'red',
                            },
                            {
                                children: 'React js developer at ManyWorlds Corp., working on admin panels (2023 Jan - 2023 Sep)',
                                color: 'blue',
                            },
                            {
                                children: 'Freelance React projects (2022 Jan - 2022 Sep)',
                                color: 'orange',
                            },
                            {
                                children: 'Machine Learning Intern at Podcastle, worked on computer vision, speech-to-text, text-to-speech APIs (2021 Aug - 2021 Dec)',
                                color: 'purple',
                            },
                            {
                                children: 'Education: Tumo (2018 - 2021)',
                                color: 'green',
                            },
                            {
                                children: 'Education: Yerevan State College of Informatics, Computer Science (2018 - 2022)',
                                color: 'green',
                            },
                            {
                                children: 'Participated in various IT events and AUA-hosted events, Drone Racing Competition, film projects (Last Year)',
                                color: 'red',
                            },
                            {
                                children: 'About Me: 21-year-old Software Developer, interested in Running, Music, Motorcycles, Photography',
                                color: 'gray',
                            }
                        ]}
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={1} style={{ ...alignCenter, justifyContent: 'center', cursor:'pointer', marginTop:'100px' }} onClick={()=>{window.location.replace('/contacts')}}>
                    <div className={`${styles.card} ${styles.parallax} ${styles.contact}`}>
                        <h2>Contact Me</h2>
                    </div>
                </ParallaxLayer>

            </Parallax>
        </div>



    )
};