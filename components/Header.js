import React from 'react';
import styles from '../components/Header.module.css';
import Link from 'next/link';

const Header = () => {
    return (
        <header className={styles.mainHeader}>
            <div className={styles.logo}>
                <h1>Your Logo</h1>
            </div>
            <nav className={styles.navMenu}>
                <ul>
                    <Link href="/home"><a>Home</a></Link>
                    <Link href="/about"><a>About</a></Link>
                    <Link href="/services"><a>Services</a></Link>
                    <Link href="/contact"><a>Contact</a></Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;