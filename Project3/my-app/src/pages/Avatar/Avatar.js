import styles from './AvatarStyles.module.css'
import avatar from '../../assets/avatar.png'
import twitterIcon from '../../assets/twitter-dark.svg'
import githubIcon from '../../assets/github-dark.svg'
import linkedIcon from '../../assets/linkedin-dark.svg'
function Avatar(){
    //const twitterIcon;
    //const githubIcon;
    //const linkeIcon;
    return (
        <section id="avatar" className={styles.container}>
            <div className={styles.image_container}>
                <img className={styles.avatar} src={avatar} alt="Haris' avatar"/>
            </div>
            <div className={styles.information}>
                <h2>Haris <br/> Imamović</h2>
                <h3>Programmer</h3>
                <span>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="Twitter icon" />
                        </a>
                    <a href="https://github.com/HarisImamovicIBU/FoundationsOfFrontend.git" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="Github icon" />
                        </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedIcon} alt="LinkedIn icon" />
                        </a>
               </span>
               <p className={styles.text}>
                   A passionate IT student always looking to expand his knowledge.
               </p>
            </div>
        </section>
    );
}
export default Avatar;