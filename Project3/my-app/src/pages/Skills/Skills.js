import styles from './SkillsStyles.module.css';
import SkillsComp from '../../components/SkillsComp';
function Skills(){
    return(
        <section id="skills" className={styles.container}>
            <h2 className="title">Skills</h2>
            <div className={styles.skills_container}>
                <SkillsComp skill="C++" />
                <SkillsComp skill="Python" />
                <SkillsComp skill="HTML" />
                <SkillsComp skill="CSS" />
                <SkillsComp skill="JS" />
            </div>
            <hr />
            <div className={styles.skills_container}>
                <SkillsComp skill="React" />
                <SkillsComp skill="Git" />
                <SkillsComp skill="Java" />
                <SkillsComp skill="Ruby" />
                <SkillsComp skill="Rust" />
           </div>
           <hr />
           <div className={styles.skills_container}>
                <SkillsComp skill="SQL" />
                <SkillsComp skill="Kotlin" />
                <SkillsComp skill="PHP" />
                <SkillsComp skill="Swift" />
                <SkillsComp skill="Go" />
           </div>
        </section>
    );
}
export default Skills;