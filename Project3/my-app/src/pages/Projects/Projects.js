import styles from './ProjectsStyles.module.css';
import sportImage from '../../assets/sport-image.svg';
function Projects() {
    return (
        <section id="projects" className={styles.container}>
            <h2 className="title">Projects</h2>
            <br></br>
            <div className={styles.projects_container}>
                <div className={styles.project_item}>
                    <img src={sportImage} alt="Project 1" className={styles.project_image} />
                </div>
                <div className={styles.project_item}>
                    <img src={sportImage} alt="Project 2" className={styles.project_image} />
                </div>
                <div className={styles.project_item}>
                    <img src={sportImage} alt="Project 3" className={styles.project_image} />
                </div>

            </div>
        </section>
    );
}

export default Projects;