import React, { useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from './Projects.module.css';
import Lottie from 'react-lottie';
// import * as animationData from '../../animations/Animation - 1706127703218.json'
import * as animationData from '../../animations/Animation - 1706127713420.json'
import { Button, Modal } from 'antd';

export const Projects: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [modalContent, setModalContent] = useState({
        title:'',
        image:'',
        description:'',
        url:'',
        urlTitle:''
    });

    
    const alignCenter = { display: 'flex', justifyContent: 'center', alignItems: 'center' };
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const showModal = () => {
        setOpen(true);
      };
      const handleOk = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e);
        setOpen(false);
      };
    
      const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e);
        setOpen(false);
        setModalContent({
            title:'',
            image:'',
            description:'',
            url:'',
            urlTitle:''
        })
      };
    
      return (
        <div className={styles.container}>
            <Modal
                title={modalContent.title}
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
                okButtonProps={{ disabled: true, hidden: true }}
                cancelButtonProps={{ disabled: true }}
                footer={null}
            >
            <img src={modalContent.image} alt='' style={{width:'100%'}}/>
            <p>{modalContent.description}</p>
            <a style={{color:'blue', fontSize:16}} href={modalContent.url}>{modalContent.urlTitle}</a>

      </Modal>
            <div className={styles.background} />

            <Parallax pages={2}>
                <ParallaxLayer offset={0.2} speed={0.25} style={{  justifyContent: 'center' }}>
                    <div className={styles.cardImageWrapper} style={{flexDirection:'column', alignItems:'center', display:'flex'}}>
                    <Lottie options={defaultOptions}
                        height={300}
                        width={300}
                    />
                        <p className={`${styles.header}`} style={{marginTop:'-50px'}}>My Projects</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={0.7} speed={1} style={{ ...alignCenter, justifyContent: 'flex-start', flexDirection:'column' }}>
                    <div className={`${styles.card} ${styles.parallax}`} onClick={()=>{
                        setModalContent({
                            image:'https://private-user-images.githubusercontent.com/56313895/277160093-dea4c546-b9f3-4cc7-8228-6182ee0d36f9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYxMzM0NTEsIm5iZiI6MTcwNjEzMzE1MSwicGF0aCI6Ii81NjMxMzg5NS8yNzcxNjAwOTMtZGVhNGM1NDYtYjlmMy00Y2M3LTgyMjgtNjE4MmVlMGQzNmY5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI0VDIxNTIzMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTA0ZmJmNjk0MzgxYzg5ZDIxMGU0ZmQzMzA3YTE0OWEwZDUwZjI4NTU0MDhiOTYyODY5ODFiMDU3YjFlMGRkMjUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.4DiqilWerlvHLFBOQOvLL-Ob7wa1YhEDQIXNjOP_NrI', 
                            title:'The Long Story | Greedy Kings', 
                            description:"Picsart Academy's iOS Group Students Suren Poghosyan and Garik Hovsepyan's final project \n Game Features:  - Turn-Based Castle Duels: Engage in head-to-head battles where each move counts. Take turns with your opponent to strategically aim and fire powerful cannon shots, aiming to be the last castle standing.  - Offline Multiplayer Mode: Enjoy the game anytime, anywhere, with offline multiplayer functionality. Challenge friends to a duel on the same device or sharpen your skills against computer-controlled opponents for solo gameplay.  - Local Leaderboard: Compete for supremacy on the local leaderboard. Track your victories and defeats as you strive to become the ultimate Cannon Clash champion among your friends and family.  - Local Multiplayer Excitement: Gather around a single device with friends or family for exciting local multiplayer sessions. Cannon Clash transforms any gathering into a battlefield of strategic wits and explosive action.  - Offline Leaderboard Glory: Rise through the ranks and assert your dominance on the local leaderboard. Prove your skills as the supreme castle commander and enjoy the thrill of local leaderboard glory.  Download Greedy Kings now and experience the joy of local multiplayer duels! Challenge your friends, hone your strategic skills, and secure your place at the top of the offline leaderboard. It's time to Clash and Conquer!", 
                            url:'https://github.com/surenpoghosian/TheLongStory',
                            urlTitle:'GitHub'
                        }); 
                        showModal()
                        
                        }}>
                            <ItemContent title="The Long Story | Greedy Kings"/>
                    </div>
                    <div className={`${styles.card} ${styles.parallax}`} onClick={()=>{
                        setModalContent({
                            image:'https://private-user-images.githubusercontent.com/56313895/299473086-3ec2c9cd-1179-4ecb-90e5-5119d3f0ac7c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYxMzQ0MjUsIm5iZiI6MTcwNjEzNDEyNSwicGF0aCI6Ii81NjMxMzg5NS8yOTk0NzMwODYtM2VjMmM5Y2QtMTE3OS00ZWNiLTkwZTUtNTExOWQzZjBhYzdjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI0VDIyMDg0NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTY2ODgyZTI2MjcyNjQ3N2ExN2JkYTIzZDllZDE4NTA3MzI0YzQxZDU1MDE1MjEwY2EwZjBmNTk4YWFkMjU3MmEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.iEFsyYyQxemel8dkwWc_aeU1fqNHCVkrYUFQUAeDbVI', 
                            title:'Talkie', 
                            description:"Talkie is a simple Text-To-Speech generator base on Suno-Bark python lib wrapped up with noje js express api and React js. \n This project was developed in 9 hours during Picsart's HackDay", 
                            url:'https://github.com/surenpoghosian/TalkieFrontEnd/tree/main',
                            urlTitle:'GitHub'
                        }); 
                        showModal()
                        }}>

                        <ItemContent title="Talkie"/>

                    </div>
                    <div className={`${styles.card} ${styles.parallax}`} onClick={()=>{
                        setModalContent({
                            image:'https://private-user-images.githubusercontent.com/56313895/296710858-ae8a4e8e-82b5-4183-88da-43201da880dc.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYxMzQ2NTEsIm5iZiI6MTcwNjEzNDM1MSwicGF0aCI6Ii81NjMxMzg5NS8yOTY3MTA4NTgtYWU4YTRlOGUtODJiNS00MTgzLTg4ZGEtNDMyMDFkYTg4MGRjLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMTI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDEyNFQyMjEyMzFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01MmZkMmY1MzczOGQxOTNiNWNmMTFlN2Y2YWNmN2Y4ZjQwMTAwZDJhNzUxZjcwOTEzY2E1NDJjNDdjMmQ4MTQ4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.z6fP4jKxLPwKC60qTtarERFoaNXoO7pGbFhwvyGsc94', 
                            title:'Magic QR', 
                            description:"Magic QR is a mobile app for creating AI generated QR codes. It was developed in 24 hours during Picsart's b2bthon by using node js express for back end and swift UIkit for front end ", 
                            url:'https://github.com/surenpoghosian/MagicQR',
                            urlTitle:'GitHub'
                        }); 
                        showModal()
                        }}>
                        <ItemContent title="Magic QR"/>

                    </div>
                    <div className={`${styles.card} ${styles.parallax}`} onClick={()=>{
                        setModalContent({
                            image:'https://private-user-images.githubusercontent.com/56313895/294608321-a2b45272-b934-4582-9a62-55f80749714c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYxMzUwNjQsIm5iZiI6MTcwNjEzNDc2NCwicGF0aCI6Ii81NjMxMzg5NS8yOTQ2MDgzMjEtYTJiNDUyNzItYjkzNC00NTgyLTlhNjItNTVmODA3NDk3MTRjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI0VDIyMTkyNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNmZTY3OWUzZDhiNDViYzA2MmFjNDU5OTU2ZmMwMWMwYjNmOWIwMmRjOTI0N2UyMTg0MTgwZTRkZTU5NWNjYzAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.JnARqgY4axonRYWPg0X9rP3_x5BvPMQaUi5aYquacrg', 
                            title:'Landmarks', 
                            description:"This project is a result of Apple's SwiftUI tutorial, here you can find components like tab navigation, switch, map, imageView etc.", 
                            url:'https://github.com/surenpoghosian/Landmarks_SwiftUI',
                            urlTitle:'GitHub'
                        }); 
                        showModal()
                        }}>
                        <ItemContent title="Landmarks"/>
                            
                    </div>
                    <div className={`${styles.card} ${styles.parallax}`} onClick={()=>{
                        setModalContent({
                            image:'', 
                            title:'The Long Story | Trailer', 
                            description:"Picsart Academy's iOS Group Students Suren Poghosyan and Garik Hovsepyan's final project presentation ", 
                            url:'https://www.youtube.com/watch?v=o1gaD9LmCrU&feature=youtu.be',
                            urlTitle:'YouTube'
                        }); 
                        showModal()
                        }}>
                        <ItemContent title="The Long Story | Trailer"/>

                    </div>
                    <div className={`${styles.card} ${styles.parallax}`} onClick={()=>{
                        setModalContent({
                            image:'https://github.com/surenpoghosian/imager/assets/56313895/793e99fe-3fe0-4b51-a044-67b84d986240', 
                            title:'Generative AI | Stable DIffusion', 
                            description:"AI content created by various tools, such as Stable Diffusion, Warp Fusion using different extension and techniques for the best results. Check the Youtube url below for more information", 
                            url:'https://www.youtube.com/playlist?list=PLEZ7f3tfPoOB360OTkoMytEsuHfDDH0qm',
                            urlTitle:'YouTube'
                        }); 
                        showModal()
                        }}>
                        <ItemContent title="Generative AI"/>
                    </div>
            </ParallaxLayer>

                {/* <ParallaxLayer offset={1} speed={1} style={{ ...alignCenter, flexDirection:'column'  }}>
                    <div className={`${styles.card}`}>
                        <h2>2nd Spin</h2>
                        <p>Discover more of my work on <a href="https://github.com/surenpoghosian"  >my GitHub profile</a>.</p>
                    </div>

                </ParallaxLayer> */}

                <ParallaxLayer offset={1} speed={1} style={{ ...alignCenter, justifyContent: 'center', cursor:'pointer', marginTop:'100px' }} onClick={()=>{window.location.replace('/contacts')}}>
                    <div className={`${styles.card} ${styles.parallax} ${styles.contact}`}>
                        <h2>Contact Me</h2>
                    </div>
                </ParallaxLayer>

                {/* <ParallaxLayer offset={1.5} speed={1} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                    <div className={`${styles.card}`}>
                        <h2>More Projects</h2>
                        <p>Discover more of my work on <a href="https://github.com/surenpoghosian" target="_blank" >my GitHub profile</a>.</p>
                    </div>

                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={1} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                    <div className={`${styles.card}`}>
                        <h2>More Projects</h2>
                        <p>Discover more of my work on <a href="https://github.com/surenpoghosian" target="_blank" >my GitHub profile</a>.</p>
                    </div>
                </ParallaxLayer> */}
            </Parallax>
        </div>
    );
};

interface ItemContentProps {
    title: string; // Define the type of 'title' as string
}


const ItemContent: React.FC<ItemContentProps> = ({ title }) => {
    return(<>
        {window.innerWidth < 1200 
            ? 
                <>
                    <h3>{title}</h3>
                    <p style={{color: 'gray', opacity: 0.4, padding: "0px 0px 0px 0px"}}>Discover more of my work on my <a href="https://github.com/surenpoghosian"  ><u>GitHub</u></a>.</p>
                </>
            :
                <>
                    <h2>{title}</h2>
                    <p style={{color: 'gray', opacity: 0.4}}>Discover more of my work on my <a href="https://github.com/surenpoghosian"  ><u>GitHub</u></a>.</p>
                </>
            }
    </>
    )
}