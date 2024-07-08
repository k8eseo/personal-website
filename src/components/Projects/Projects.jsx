import ProjectsContent from '../ProjectsContent/ProjectsContent.jsx'
import { slides } from '../../assets/data/projectData.json'

import styles from './Projects.module.css'

function Projects() {
    return(
        <section className={styles.container} id="projects">
            <h1 className={styles.projects}>projects i've worked on</h1>
            <ProjectsContent data={slides}/>
            <div className={styles.topBlur}></div>
            <div className={styles.middleBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
}

export default Projects