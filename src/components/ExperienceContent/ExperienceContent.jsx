import styles from './ExperienceContent.module.css'

function ExperienceContent({data}) {

    const handleClick = (url) => {
        window.open(url);
    }

    return(
        <div className={styles.container}>
            {data.map((item, index) => (
                <div className={styles.card} key={index} onClick={() => handleClick(item.url)}>
                    <h3 className={styles.company}>{item.company}</h3>
                    <img className={styles.logo} src={item.src} alt={item.alt}></img>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p>{item.date}</p>
                </div>
            ))}
        </div>
    );
}

export default ExperienceContent