import React from 'react';
import styles from './ModalStyles.module.css';

function Modal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>

        <div className={styles.modalHeader}>
          <h2>{project.name}</h2>
        </div><br/>
        <div className={styles.modalBody}>
          <div className={styles.buttons}>
            <a href={project.viewApp} target="_blank" rel="noopener noreferrer">
              <button className={styles.appButton}>View Live Demo</button>
            </a>
            <a href={project.viewSource} target="_blank" rel="noopener noreferrer">
              <button className={styles.sourceButton}>View Source Code</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;




