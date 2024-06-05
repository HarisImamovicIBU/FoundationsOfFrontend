import styles from './ProjectsStyles.module.css';
import sportImage from '../../assets/sport.png';
import cgImage from '../../assets/hamburger.png';
import techImage from '../../assets/tech.png';
import ProjectsImage from '../../components/ProjectsImages';
function Projects() {
    return (
        <section id="projects" className={styles.container}>
            <h2 className="title">Projects</h2>
            <div className={styles.projects_container}>
            <ProjectsImage
          src={sportImage}
          link="https://github.com"
          h3="SE Ticketing"
          p="Sports ticketing systm"
        />
        <ProjectsImage
          src={cgImage}
          link="https://github.com"
          h3="ChillnGrill"
          p="Restaurant website"
        />
        <ProjectsImage
          src={techImage}
          link="https://github.com"
          h3="TechCo"
          p="Tech shop"
        />
            </div>
        </section>
    );
}

export default Projects;