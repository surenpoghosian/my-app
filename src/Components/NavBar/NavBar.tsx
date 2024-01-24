import React from "react";
import { Link } from "react-router-dom";
import styles from './NavBar.module.css'

export function NavBar(){
    
    return(
        <nav className={styles.mask}>
            <a href="/home">Suren Poghosyan</a>
            <ul className={styles.list}>
                <li><a href="/home">Home</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contacts">Contacts</a></li>
            </ul>
        </nav>
    )
}