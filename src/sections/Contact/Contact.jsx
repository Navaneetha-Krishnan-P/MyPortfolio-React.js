import styles from './ContactStyles.module.css';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>

      <div className={styles.contactItem} data-aos="slide-right">
        <a className={styles.emailTag} href="mailto:krissnank89038@gmail.com">
          <MdEmail size={35} color='steelblue' />
        </a>
     </div>

      <div className={styles.contactItem} data-aos="slide-left">
        <a className={styles.phoneTag} href="tel:8903848938">
          <FaPhone size={25} color='green' />
        </a>
      </div>
    </section>
  );
}

export default Contact;

