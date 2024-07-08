import { useState } from 'react';

import styles from './NavBar.module.css'

import burgerIcon from '../../assets/img/burger.png'

function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return(
        <nav>
            <div className={styles.container}>
                <a href="#">about</a>
                <a href="#experience">experience</a>
                <a href="#skills">skills</a>
                <a href="#projects">projects</a>
            </div>
            <img className={styles.burger} src={burgerIcon} width="35" onClick={handleMenuOpen}></img>
            <div className={`${styles.burgerMenu} ${menuOpen ? styles.active : ""}`}>
                <a href="#" onClick={closeMenu}>about</a>
                <a href="#experience" onClick={closeMenu}>experience</a>
                <a href="#skills" onClick={closeMenu}>skills</a>
                <a href="#projects" onClick={closeMenu}>projects</a>
            </div>
        </nav>
    );
}

export default NavBar