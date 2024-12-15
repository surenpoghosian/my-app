import React from 'react';
import { Timeline } from 'antd';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from './About.module.css';
import Lottie from 'react-lottie';
import * as animationData from '../../animations/Animation - 1706127703218.json';
// import * as animationData from '../../animations/Animation - 1706127713420.json'

export const About: React.FC = () => {
  const alignCenter = { display: 'flex', justifyContent: 'center', alignItems: 'center' };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className={styles.container}>
      <Parallax pages={2}>
        <ParallaxLayer offset={window.innerWidth < 1200 ? 0.1 : 0.2} speed={0.5}>
          <div
            className={styles.cardImageWrapper}
            style={{ flexDirection: 'column', alignItems: 'center', display: 'flex' }}
          >
            <Lottie options={defaultOptions} height={300} width={300} />
            <p className={`${styles.header}`} style={{ marginTop: '-50px' }}>
              About Me
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.6} speed={2}>
          <Timeline
            style={{ color: 'gray' }}
            mode="alternate"
            items={[
              {
                children: "Recognized as The Best Solo Developer | Picsart's Internal Hackathon (2024)",
                color: 'purple',
              },
              {
                children: 'Built my first rack server (2024)',
                color: 'gray',
              },
              {
                children: 'Joined AUA Drone Club (2024)',
                color: 'purple',
              },
              {
                children: 'Published my first npm package - Code Diagnose (beta) (2024)',
                color: 'blue',
              },
              {
                children: 'First open source contribution | DefinetlyTyped | Typescript (2024)',
                color: 'blue',
              },
              {
                children: 'Mentor at PyData Yerevan x AUA| Pandas | Open Source Contribution (2024)',
                color: 'purple',
              },
              {
                children: '24th place at “Yeghiazaryan Cup 2024” programming Competition (2024)',
                color: 'purple',
              },
              {
                children: 'Picsart | Software Engineer 1 | Foundational AI Tools (2024)',
                color: 'green',
              },
              {
                children: 'AUA Epic Incubation Program Resident | Clubroomz (2024)',
                color: 'purple',
              },
              {
                children: 'AUA Epic Jam 3 | 2nd Spin (2024)',
                color: 'purple',
              },
              {
                children: "Participated Picsart's B2B Internal Hackathon (2024)",
                color: 'purple',
              },
              {
                children: 'Published my first app to App Store | Greedy Kings (2023)',
                color: 'blue',
              },
              {
                children: 'Invia Investments | React js, TypeScript, Jest (2023)',
                color: 'green',
              },
              {
                children:
                  "Attended DigiTech23 as Picsart Academy's representative student, with a speech about Video Generative AI (2023)",
                color: 'pruple',
              },
              {
                children: 'Picsart | Content Creation Specialist (2023)',
                color: 'green',
              },
              {
                children:
                  'Graduated from Picsart Academy | iOS Bootcamp | My app was recognized as one of two best projects (2023)',
                color: 'orange',
              },
              {
                children: "Participated in Picsart's HackDay | Internal Hackathon (2023)",
                color: 'purple',
              },
              {
                children: 'Won the AI Design Sprint | Picsart | Frank Sinatra Back To Black (2023)',
                color: 'purple',
              },
              {
                children: 'Video creation with Generative Ai internship at Picsart Academy (2023)',
                color: 'green',
              },
              {
                children: 'Joined Picsart Academy | iOS course (2023)',
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
                children: 'Graduated from Yerevan State College of Informatics (2022)',
                color: 'orange',
              },
              {
                children: 'Freelance React Developer (2022)',
                color: 'green',
              },
              {
                children:
                  'Machine Learning Intern at Podcastle, worked on computer vision, speech-to-text, text-to-speech APIs (2021)',
                color: 'green',
              },
              {
                children: 'First commercial IOT project, watering system for gardens (2021)',
                color: 'green',
              },
              {
                children: 'Graduated from TUMO (2020)',
                color: 'orange',
              },
              {
                children: 'Crafted my first racing drone (2019)',
                color: 'gray',
              },
              {
                children: 'Joined TUMO Yerevan as a student (2018)',
                color: 'orange',
              },
              {
                children: 'Joined Yerevan State College of Informatics as a student (2018)',
                color: 'orange',
              },
              {
                children: 'Participated DigiTech Expo 2017, with robotics team (2017)',
                color: 'purple',
              },
              {
                children:
                  'Joined Robotics class located in Gavar | Introduction to radio electronics and microcontrollers (2017)',
                color: 'orange',
              },
            ]}
          />
        </ParallaxLayer>
        {/* {window.innerWidth > 1200 && (
          <ParallaxLayer
            offset={1}
            speed={1}
            style={{ ...alignCenter, justifyContent: 'center', cursor: 'pointer', marginTop: '100px' }}
            onClick={() => {
              window.location.replace('/contacts');
            }}
          >
            <div className={`${styles.card} ${styles.parallax} ${styles.contact}`}>
              <h2>Contact Me</h2>
            </div>
          </ParallaxLayer>
        )} */}
      </Parallax>
    </div>
  );
};
