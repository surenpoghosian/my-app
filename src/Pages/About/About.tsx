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
                                children: 'Epic Jam 3 | 2nd Spin (2024)',
                                color: 'purple',
                            },
                            {
                                children: 'Participated in Picsart b2b hackathon (2024)',
                                color: 'purple',
                            },
                            {
                                children: 'Invia Investments | React js, TypeScript, Jest (2023)',
                                color: 'green',
                            },
                            {
                                children: 'Attended DigiTech23 as Academy student with a speech about generative Ai (2023)',
                                color: 'pruple',
                            },
                            {
                                children: 'Picsart | Content Creation Specialist (2023)',
                                color: 'green',
                            },
                            {
                                children: "iOS Bootcamp graduation, my team's project was recognized as one of two best projects (2023)",
                                color: 'orange',
                            },
                            {
                                children: 'Picsart HackDay (2023)',
                                color: 'purple',
                            },
                            {
                                children: 'Ai Design Sprint winner at Picsart (2023)',
                                color: 'purple',
                            },
                            {
                                children: 'Video creation internship with Generative Ai at Picsart Academy (2023)',
                                color: 'green',
                            },
                            {
                                children: 'Became a student at Picsart Academy, iOS development (2023)',
                                color: 'orange',
                            },
                            {
                                children: 'React JS developer at Manyworlds corp. (2023)',
                                color: 'green',
                            },
                            {
                                children: 'Mobile developer at Digital Empire (2022)',
                                color: 'green',
                            },
                            {
                                children: 'Graduated from College (2022)',
                                color: 'orange',
                            },
                            {
                                children: 'Freelance React projects (2022)',
                                color: 'green',
                            },
                            {
                                children: 'Machine Learning Intern at Podcastle, worked on computer vision, speech-to-text, text-to-speech APIs (2021)',
                                color: 'green',
                            },
                            {
                                children: 'First commercial IOT project, garden watering system (2021)',
                                color: 'green',
                            },
                            {
                                children: 'Graduated from TUMO (2020)',
                                color: 'orange',
                            },
                            {
                                children: 'Crafted my first racing Drone (2019)',
                                color: 'gray',
                            },
                            {
                                children: 'Applied to TUMO (2018)',
                                color: 'orange',
                            },
                            {
                                children: 'Became a student at Yerevan State College of Informatics (2018)',
                                color: 'orange',
                            },
                            {
                                children: 'Participated at DigiTech with robotics team(2017)',
                                color: 'purple',
                            },
                            {
                                children: 'Was introduced to Arduino at Robotics class (2017)',
                                color: 'orange',
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