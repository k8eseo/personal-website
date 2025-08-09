import SkillsContent from '../SkillsContent/SkillsContent.jsx'
import skillData from '../../assets/data/skillData.json'

import styles from './Skills.module.css'

function Skills() {
    const { skills } = skillData;

    return(
        <section className={styles.container} id="skills">
            <h1 className={styles.title}>skills</h1>
            <div className={styles.content}>
                <SkillsContent skills={skills} />
            </div>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
}

export default Skills