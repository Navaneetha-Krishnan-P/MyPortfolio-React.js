import React from 'react';
import styles from './EducationStyles.module.css';
import certificate from "../../assets//GuviCertificate.png";
import { FaRegSquareCheck } from "react-icons/fa6";


export const Education = () => {
  return (
    <section className={styles.educationContainer}>
        <h1 className={styles.educationTitle}>Education</h1>
        
        <div className={styles.eduHead}>
            <span><FaRegSquareCheck size={20} color='steelblue'/>&nbsp; <h3>Course</h3></span>
            <br/>
            <p>MERN - Full Stack Development</p>
            <p>Guvi Geek Private Limited, Chennai.</p>
            <p>(2024)</p>
            <br/>
            <a href={certificate} download>
                    <button className={styles.buttonCourse}>Certificate</button>
            </a>
        </div><br/>
        <div className={styles.eduHead}>
            <span><FaRegSquareCheck size={20} color='steelblue'/>&nbsp; <h3>College</h3></span>
            <br/>
            <p>Chennai Institute of Technology, Chennai. </p>
            <p>B.E - Electrical and Electronics Engineering  </p>
            <p>(2019 - 2023)</p>
            <p>CGPA - 89%</p>
        </div>
        <div className={styles.eduHead}>
            <span><FaRegSquareCheck size={20} color='steelblue'/>&nbsp; <h3>HSC</h3></span>
            <br/>
            <p>Veveaham Higher Secondary School, Dharapuram.</p>
            <p>(2017 - 2019)</p>
            <p>Marks - 82%</p>
         </div>   
         <div className={styles.eduHead}>
            <span><FaRegSquareCheck size={20} color='steelblue'/>&nbsp; <h3>SSLC</h3></span>
            <br/>
            <p>Ponnu Matriculation Higher Secondary School, Dharapuram.</p>
            <p>(2016 - 2017)</p>
            <p>Marks - 97%</p>
        </div>
        
    </section>
  );
};

