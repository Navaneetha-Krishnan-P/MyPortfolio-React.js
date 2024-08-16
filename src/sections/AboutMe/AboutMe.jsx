import React from 'react';
import styles from './AboutMeStyles.module.css';

export const AboutMe = () => {
  return (
    <section className={styles.aboutMeContainer}>
        <h1 className={styles.aboutMeTitle}>About Me</h1>
        <div>
            <p>To use my extensive knowledge of software engineering, innovative problem-solving skills, and passion for technology to develop and implement high-quality software solutions and contribute to the success of the organization.</p>
            <br/>
            <p>Front end developer with a strong foundation in HTML, CSS, and JavaScript. Proficient in React and responsive design principles. Seeking to leverage my skills and passion for creating engaging user experiences to contribute to a dynamic web development team.</p>
        </div>
    </section>
  );
};

