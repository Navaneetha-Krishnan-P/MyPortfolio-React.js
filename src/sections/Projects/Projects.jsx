import React, { useState } from 'react';
import styles from './ProjectsStyles.module.css';
import rentalEquipmentsPic from '../../assets/RentalEqupimentsPic.png';
import weatherAppPic from '../../assets/WeatherAppPic.png';
import employeeDashboardpic from '../../assets/EmployeeDashboardPic.png';
import shoppingCartPic from '../../assets/ShoppingCartPic.png';
import ProjectCard from '../../common/ProjectCard';
import Modal from '../Modal/Modal';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "Rental Equipments",
      src: rentalEquipmentsPic,
      description: "Rent Equipment Online - MERN",
      viewApp: "https://market-for-rental-equipments-e-commerce-website-mern-v5yl.vercel.app",
      viewSource: "https://github.com/username/rental-equipments"
    },
    {
      name: "Employees Dashboard",
      src: employeeDashboardpic,
      description: "Employees Directory - MERN",
      viewApp: "https://employee-dashboard-crud-mern-otc4.vercel.app",
      viewSource: "https://github.com/username/employee-dashboard"
    },
    {
      name: "Weather App",
      src: weatherAppPic,
      description: "Global Weather Tracker - React.js",
      viewApp: "https://weather-app-react-js-o3o4.vercel.app",
      viewSource: "https://github.com/username/weather-app"
    },
    {
      name: "Shopping Cart",
      src: shoppingCartPic,
      description: "Online Shopping - React.js",
      viewApp: "https://shopping-cart-hooks-and-states-react-js-6hke.vercel.app",
      viewSource: "https://github.com/username/shopping-cart"
    }
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


