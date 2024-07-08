import styles from './Skills.module.css'
import Bubble from '../Bubble/Bubble.jsx'
import pythonLogo from '../../assets/img/skills/python.png'
import javaLogo from '../../assets/img/skills/java.png'
import cLogo from '../../assets/img/skills/c.png'
import javascriptLogo from '../../assets/img/skills/javascript.png'
import htmlLogo from '../../assets/img/skills/html.png'
import cssLogo from '../../assets/img/skills/css.png'
import reactjsLogo from '../../assets/img/skills/reactjs.png'
import viteLogo from '../../assets/img/skills/vite.png'

function Skills() {
    return(
        <section className={styles.container} id="skills">
            <h1 className={styles.skills}>languages & technologies</h1>
            <div className={styles.content}>
                <div className={styles.languages}>
                    <Bubble image={pythonLogo} name="Python"/>
                    <Bubble image={javaLogo} name="Java"/>
                    <Bubble image={cLogo} name="C"/>
                    <Bubble image={javascriptLogo} name="JavaScript"/>
                    <Bubble image={htmlLogo} name="HTML"/>
                    <Bubble image={cssLogo} name="CSS"/>
                </div>
                <div className={styles.technologies}>
                    <Bubble image={reactjsLogo} name="React.js"/>
                    <Bubble image={viteLogo} name="Vite"/>
                </div>
            </div>
        </section>
    );
}

export default Skills