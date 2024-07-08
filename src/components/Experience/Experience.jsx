import ExperienceContent from '../ExperienceContent/ExperienceContent.jsx'
import { experiences } from '../../assets/data/experienceData.json'

import styles from './Experience.module.css'

function Experience() {
    return(
        <section className={styles.container} id="experience">
            <h1 className={styles.title}>experience</h1>
            <ExperienceContent data={experiences}/>
        </section>
    );
}

export default Experience