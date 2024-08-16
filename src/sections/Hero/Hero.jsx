import styles from "./HeroStyles.module.css";
import profilePic from "../../assets/MyPic.jpg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import resume from "../../assets/Navaneetha Krishnan P - Resume.pdf";
import { useTheme } from "../../common/ThemeContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === "light" ? sun : moon;

    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={profilePic} alt="My Profile Picture" />
                <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme} />
            </div>
            <div className={styles.info}>
                <h1>Navaneetha Krishnan P</h1>
                <h2>Mern &nbsp;Stack &nbsp;Developer</h2>
                <span>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <FaGithub className={styles.icon} size={35} />
                    </a>
                    <a href="https://Linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className={styles.icon} size={35} />
                    </a>
                </span>
                <p>"I am dedicated to developing modern React web apps tailored for commercial businesses."</p>
                <p>"My focus is on creating efficient, scalable, and user-friendly applications that drive business growth."</p>
                <p>"With a keen eye for design and functionality, I aim to deliver high-quality solutions that meet the evolving needs of the market."</p>
                <a href={resume} download>
                    <button className={styles.button}>Resume</button>
                </a>
            </div>
        </section>
    );
}

export default Hero;


