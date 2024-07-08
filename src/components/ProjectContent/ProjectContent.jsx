import styles from './ProjectContent.module.css'

function ProjectContent({data}) {
    return(
        <div className={styles.container}>
            {data.map((item, index) => (
                <div className={styles.card}>
                    <img key={index} src={item.src} alt={item.alt} width="550" height="350"></img>
                    <div className={styles.textContent}>
                        <h1>{item.title}</h1>
                        <p>{item.desc}</p>
                        <div className={styles.techContainer}>
                            {item.tech.map((tech, techIndex) => (
                                <p key={techIndex}>{tech}</p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectContent