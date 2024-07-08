import styles from './Projects.module.css'
import ProjectContent from '../ProjectContent/ProjectContent.jsx'
import {slides} from '../../assets/data/projectData.json'

function Projects() {
    return(
        <div className={styles.container} id="projects">
            <h1 className={styles.projects}>projects i've worked on</h1>
            <ProjectContent data={slides}/>
        </div>
    );
}

export default Projects