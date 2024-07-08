import styles from './ProjectsContent.module.css'

function ProjectsContent({data}) {
    return(
        <div className={styles.container}>
            {data.map((item, index) => (
                <div key={index} className={styles.card}>
                    <img src={item.src} alt={item.alt} width="550" height="350"></img>
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

export default ProjectsContent