import styles from './SkillsContent.module.css'

function SkillsContent({skills}) {
    return(
        <div className={styles.container}>
            {skills.map((item, index) => (
                <div className={styles.skills} key={index}>
                    <div className={styles.bubble}>
                        <img src={item.src} alt={item.alt}></img>
                    </div>
                    <h2>{item.name}</h2>
                </div>
            ))}
        </div>
    );
}

export default SkillsContent