import React from 'react';
import styles from './EducationStyles.module.css';
import { FaRegSquareCheck } from "react-icons/fa6";
import clgicon from "../../assets/Cit-logo.png"
import vmhss from "../../assets/Veveaham-icon.jpg"
import pmhss from "../../assets/Ponnu-icon.jpg"

export const Education = () => {
  return (
    <section className={styles.educationContainer}>
        <h1 className={styles.educationTitle}>Education</h1>

        <div className={styles.eduHead} data-aos="slide-right">
            <span><h3><FaRegSquareCheck size={20} color='steelblue' /> &nbsp;Bachelor's Degree</h3></span>
            <br/>
            <img className={styles.eduIcon} src={clgicon} width={"70px"} height={"70px"} style={{borderRadius:"10px"}}></img>
            <div className={styles.eduText}>
                <p>Chennai Institute of Technology, Chennai.</p>
                <p>B.E - Electrical and Electronics Engineering</p>
                <p>(2019 - 2023)</p>
                <p>CGPA - 89%</p>
            </div>
        </div>

        <div className={styles.eduHead} data-aos="slide-left">
            <span><h3><FaRegSquareCheck size={20} color='steelblue'/> &nbsp;Higher Secondary Education</h3></span>
            <br/>
            <img className={styles.eduIcon} src={vmhss} width={"70px"} height={"70px"} style={{borderRadius:"10px"}}></img>
            <div className={styles.eduText}>
                <p>Veveaham Higher Secondary School, Dharapuram.</p>
                <p>(2017 - 2019)</p>
                <p>Marks - 82%</p>
            </div>
         </div>   

         <div className={styles.eduHead} data-aos="slide-right">
            <span><h3><FaRegSquareCheck size={20} color='steelblue'/> &nbsp;Secondary Education</h3></span>
            <br/>
            <img className={styles.eduIcon} src={pmhss} width={"70px"} height={"70px"} style={{borderRadius:"10px"}}></img>
            <div className={styles.eduText}>
                <p>Ponnu Matriculation Higher Secondary School, Dharapuram.</p>
                <p>(2016 - 2017)</p>
                <p>Marks - 97%</p>
            </div>
        </div>
        
    </section>
  );
};


