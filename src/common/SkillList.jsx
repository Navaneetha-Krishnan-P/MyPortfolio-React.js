import { DiJavascript } from "react-icons/di";

function SkillList({ skill,icon }) {
  return (
    <span>
      <p>{icon}</p>&nbsp;
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
