import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";


function Skills() {

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1><br/>
      <div className={styles.skillList}>
        <SkillList icon={<IoLogoJavascript size={30} color='goldenrod'/>} skill="JavaScript" />
        <SkillList icon={<IoLogoHtml5 size={30} color='brown'/>} skill="HTML" />
        <SkillList icon={<IoLogoCss3 size={30} color='royalblue'/>} skill="CSS" />
        <SkillList icon={<FaBootstrap size={30} color='purple'/>} skill="BootStrap" />
      </div>
      <br/><br/>
      <div className={styles.skillList}>
        <SkillList icon={<FaReact size={30} color='steelblue'/>} skill="React.js" />
        <SkillList icon={<FaNodeJs size={30} color='green'/>} skill="Node.js" />
        <SkillList icon={<SiExpress size={30} color='dimgrey'/>} skill="Express.js" />
        <SkillList icon={<SiMongodb size={30} color='darkgreen'/>} skill="MongoDB" />
      </div>
    </section>
  );
}

export default Skills;
