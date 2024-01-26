import React from "react";
import styles from './NavBar.module.css'

export function NavBar(){
    
    return(
        <nav className={styles.mask}>
            <a href="/home" style={{ marginTop:'15px', zIndex:1 }}>Suren Poghosyan</a>
            <ul className={styles.list}>
                <li><a href="/home">Home</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contacts">Contacts</a></li>
            </ul>
        </nav>
    )
}