import styles from './Bubble.module.css'

function Bubble(props) {
    return(
        <div className={styles.container}>
            <div className={styles.bubble}>
                <img className={styles.logo} src={props.image}></img>
            </div>
            <h2>{props.name}</h2>
        </div>
    );
}

export default Bubble