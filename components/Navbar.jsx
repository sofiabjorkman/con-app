import Link from 'next/link'
import React, { useState } from 'react';

import styles from '../styles/Navbar.module.css'

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
  <div className={styles.navC}>
    <header className={styles.header}>
      <Link href='/'>
        <a>
          <h1 className={styles.headerText}>Hello</h1>
        </a>
      </Link>

      <div className={styles.burger} open={open} onClick={() => setOpen(!open)}>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
      </div>

      <div className={styles.menuLinksC} onClick={() => setOpen(!open)} style={{
          display: open?"block":"none"
        }}>
      <ul className={styles.menuLinks}>
        <Link href='/'><p className={styles.link}>Home</p></Link>
        <Link href='Gallery'><p className={styles.link}>Gallery</p></Link>
        <Link href='/About'><p className={styles.link}>About</p></Link>
        <Link href='Contact'><p className={styles.link}>Contact</p></Link>
      </ul>
      </div>
    </header>
    </div>
  )
}
