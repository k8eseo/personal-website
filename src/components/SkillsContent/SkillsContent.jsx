import styles from './SkillsContent.module.css'

function SkillsContent({languages, techs}) {
    return(
        <div className={styles.container}>
            <div className={styles.languages}>
                {languages.map((item, index) => (
                    <div key={index}>
                        <div className={styles.bubble}>
                            <img src={item.src} alt={item.alt}></img>
                        </div>
                        <h2>{item.name}</h2>
                    </div>
                ))}
            </div>
            <div className={styles.techs}>
                {techs.map((item, index) => (
                    <div key={index}>
                        <div className={styles.bubble}>
                            <img src={item.src} alt={item.alt}></img>
                        </div>
                        <h2>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillsContent