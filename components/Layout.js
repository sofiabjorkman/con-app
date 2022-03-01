import Link from 'next/link'

import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Link href='/'>
          <a>
            <h1 className={styles.headerText}>Hello</h1>
          </a>
        </Link>
      </header>

      <div>
        { children }
      </div>
      
      <footer className={styles.footerC}>
        <p className={styles.footerText}>Copyright 2022</p>
      </footer>
    </div>
  )
}