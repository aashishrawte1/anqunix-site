import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log('toggleMenu', menuOpen);
        setMenuOpen(!menuOpen);
    }

    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>Anqunix.</h1>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`${styles.menu} ${menuOpen ? styles.show : ''}`}>
                <ul className={styles.menu_list}>
                    <li className={styles.menu_item}>
                        <Link to="/" className={styles.menu_link}>Home</Link>
                    </li>
                    <li className={styles.menu_item}>
                        {/* change router name to contact instead of contact-us when done */}
                        <Link to="/contact-us" className={styles.menu_link}>Contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
