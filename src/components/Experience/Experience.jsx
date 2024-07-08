import styles from './Experience.module.css'
import Card from '../Card/Card.jsx'
import matrixPic from '../../assets/img/experience/matrix.jpeg'
import dandyhacksPic from '../../assets/img/experience/dandyhacks.jpeg'
import csugPic from '../../assets/img/experience/csug.png'

function Experience() {
    return(
        <section className={styles.container} id="experience">
            <h1 className={styles.experience}>experience</h1>
            <div className={styles.cardContainer}>
                <Card image={matrixPic} onClick={"https://portal.matrixanalytics.co/MATRiX/"} company="MATRiX ANALYTiCS CORPORATION" title="Software Development Intern" 
                date="Jun 2023 - Aug 2023"/>
                <Card image={dandyhacksPic} onClick={"https://dandyhacks.net/"} company="DandyHacks" title="Director" 
                date="Dec 2023 - Present"/>
                <Card image={csugPic} onClick={"https://ur-csug.org/#/"} company="Computer Science Undergraduate Council" title="Vice President" 
                date="May 2024 - Present"/>
            </div>
        </section>
    );
}

export default Experience