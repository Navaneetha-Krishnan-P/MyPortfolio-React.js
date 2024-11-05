import React, { useState } from 'react';
import styles from './ProjectsStyles.module.css';
import rentalEquipmentsPic from '../../assets/RentalEqupimentsPic.png';
import shoppingCartPic from "../../assets/ShoppingCartPic.png"
import employeeDashboardpic from '../../assets/EmployeeDashboardPic.png';
import loginPic from '../../assets/LoginPic.png';
import ProjectCard from '../../common/ProjectCard';
import Modal from '../Modal/Modal';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "Rental Equipments",
      src: rentalEquipmentsPic,
      description: "Rent Equipment Online - MERN",
      viewApp: "https://market-for-rental-equipments-frontend-mern.vercel.app",
      viewSource: "https://github.com/Navaneetha-Krishnan-P/MarketForRentalEquipments-ECommerceWebsite-MERN"
    },
    {
      name: "Login and Todo App",
      src:loginPic,
      description: "Login and Register using JWT - MERN",
      viewApp: "https://login-and-data-jw-tand-crud-frontend-mern.vercel.app",
      viewSource: "https://github.com/Navaneetha-Krishnan-P/LoginAndDatas-JWTandCRUD-MERN"
    },
    {
      name: "Shopping Application",
      src: shoppingCartPic,
      description: "Online Shopping - MERN",
      viewApp: "https://e-commerce-website-frontend-mern.vercel.app",
      viewSource: "https://github.com/Navaneetha-Krishnan-P/E-CommerceWebsite-MERN"
    },
    {
      name: "Employees Dashboard",
      src: employeeDashboardpic,
      description: "Employee Directory - MERN",
      viewApp: "https://employee-dashboard-crud-mern-otc4.vercel.app",
      viewSource: "https://github.com/Navaneetha-Krishnan-P/EmployeeDashboard-CRUD-MERN"
    },
    
    
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            src={project.src}
            h3={project.name}
            p={project.description}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>

      <Modal project={selectedProject} onClose={closeModal} />
    </section>
  );
}

export default Projects;


