import React, { useState } from 'react';
import styles from './MobileMenu.module.css';

export function MobileMenu(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.mobile_menu_container}>
            <button className={styles.menu_toggle} onClick={toggleMenu}>
                {isOpen ? '✕' : '☰'}
            </button>
            <div className={`${styles.menu_content} ${isOpen ? styles.menu_content_open : ''}`}>
                <nav className={styles.menu_nav}>
                    <a href="/" onClick={toggleMenu}>Home</a>
                    <a href="/projects" onClick={toggleMenu}>Projects</a>
                    <a href="/about" onClick={toggleMenu}>About Me</a>
                    <a href="/contacts" onClick={toggleMenu}>Contacts</a>
                </nav>
            </div>
        </div>
    );
};


