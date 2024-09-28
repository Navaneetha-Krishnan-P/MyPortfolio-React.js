import React from 'react'
import styles from './CertificationStyles.module.css';

export const Certification = () => {
  return (
    <section className={styles.CertificationContainer}>
    <h1 className={styles.CertificationTitle}>Certification Course</h1>
    
    <div className={styles.eduHead}>
        <img className='guvipic' src="https://play-lh.googleusercontent.com/CLgcmJ7TRmQIGBy8f8KBN1BDHbpmerwj_fgEriggjhaUIYO4mnfTHjqdF1d0ZNy1ziw" width={"100px"} height={"100px"} style={{borderRadius:"10px"}}></img>
        <br/><br/>
        <p>MERN - Full Stack Development</p>
        <p>Guvi Geek Private Limited, Chennai.</p>
        <p>(2024)</p>
        <p>During my time at GUVI GEEK NETWORK, I underwent comprehensive training as a MERN Stack Developer, focusing on mastering the MongoDB, Express.js, React.js, and Node.js technologies. Through a blend of theoretical learning and hands-on practical exercises, I acquired a solid understanding of both front-end and back-end development aspects.</p>
        <br/>
        <a href="https://drive.google.com/file/d/1jl1ZDbH5VdMFCLI4AlIEe3VdDvAcTZIQ/view?usp=drivesdk" target='_blank'>
                <button className={styles.buttonCourse}>Certificate</button>
        </a>
    </div><br/>
    
    
</section>
  )
}
