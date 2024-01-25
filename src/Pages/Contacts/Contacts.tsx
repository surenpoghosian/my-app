import React, { useState } from "react";
import styles from './Contacts.module.css'
import { ContactForm } from "./ContactForm";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Lottie from "react-lottie";
import * as animationData from '../../animations/Animation - 1706127725044.json'

export const Contacts: React.FC = () => {
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
      <div className={styles.wrapper}>
        <Parallax pages={2}>
            <ParallaxLayer  offset={0.15} speed={0.5} >
                <div className={styles.cardImageWrapper}>
                  {/* <img src="/assets/Lantern.png" alt="Testimonial" className={styles.cardImage} /> */}
                  <Lottie options={defaultOptions}
                    height={200}
                    width={200}
                    // isStopped={this.state.isStopped}
                    // isPaused={this.state.isPaused}
                />

                </div>
            </ParallaxLayer>

            <ParallaxLayer  offset={0.45} speed={0.4} style={{ zIndex:1, height:'60px' }}>
                <div className={styles.cardImageWrapper}>
                  <img src="/assets/instagram-icon-png.png" alt="Testimonial" className={styles.socialIcon} onClick={()=>{window.open('https://www.instagram.com/suren.poghosian/','_blank')}}/>
                  <img src="/assets/linkedin-icon.jpeg" alt="Testimonial" className={styles.socialIcon} onClick={()=>{window.open('https://www.linkedin.com/in/surenpoghosyan/','_blank')}}/>
                  <img src="/assets/linktree.jpg" alt="Testimonial" className={styles.socialIcon} onClick={()=>{window.open('https://linktr.ee/surenpoghosian','_blank')}}/>
                </div>
            </ParallaxLayer>

          <ParallaxLayer offset={0.5} speed={0.25} style={{...alignCenter, height:'400px'}} >
            <ContactForm/>
          </ParallaxLayer>

        </Parallax>

      </div>
    );
  };
    