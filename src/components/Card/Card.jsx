import styles from './Card.module.css'

function Card(props) {

    const handleClick = (e) => {
        window.open(props.onClick)
    }

    return(
        <div className={styles.container} onClick={handleClick}>
            <h3 className={styles.company}>{props.company}</h3>
            <img className={styles.imageStyle} src={props.image}></img>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles.dateStyle}>{props.date}</p>
        </div>
    );
}

export default Card