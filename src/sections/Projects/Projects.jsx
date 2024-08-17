import styles from './ProjectsStyles.module.css';
import rentalEquipmentsPic from '../../assets/RentalEqupimentsPic.png';
import weatherAppPic from '../../assets/WeatherAppPic.png';
import employeeDashboardpic from '../../assets/EmployeeDashboardPic.png';
import shoppingCartPic from '../../assets/ShoppingCartPic.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={rentalEquipmentsPic}
          link="https://market-for-rental-equipments-e-commerce-website-mern-v5yl.vercel.app"
          h3="Rental Equipments"
          p="Rent Equipment Online - MERN"
        />
        <ProjectCard
          src={employeeDashboardpic}
          link="https://employee-dashboard-crud-mern-otc4.vercel.app"
          h3="Employees Dashboard"
          p="Employees Directory - MERN"
        />
        <ProjectCard
          src={weatherAppPic}
          link="https://weather-app-react-js-o3o4.vercel.app"
          h3="Weather App"
          p="Global Weather Tracker - React.js"
        />
        <ProjectCard
          src={shoppingCartPic}
          link="https://shopping-cart-hooks-and-states-react-js-6hke.vercel.app"
          h3="Shopping Cart"
          p="Online Shopping - React.js"
        />
      </div>
    </section>
  );
}

export default Projects;

