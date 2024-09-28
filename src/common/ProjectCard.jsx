import React from 'react';
import styles from './ProjectCardStyles.module.css';

function ProjectCard({ src, h3, p, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img className={styles.hover} src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  );
}

export default ProjectCard;


