import styles from './NavBar.module.css'

function NavBar() {
    return(
        <div className={styles.navbar}>
            <a href="#">about</a>
            <a href="#experience">experience</a>
            <a href="#skills">skills</a>
            <a href="#projects">projects</a>
        </div>
    );
}

export default NavBar