import React from 'react'

import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <>
    <div className={styles.contactB}>
      <div className={styles.contactC}>
        <div className={styles.headerText}>
          <h1>Contact us</h1>
        </div>

        <div>
          <input className={styles.inputContent} type='text' placeholder='Full Name' />
          <input className={styles.inputContent} type='text' placeholder='E-mail' />
        </div>

        <div>
          <textarea className={styles.textareaContent} placeholder='Type your message...' />
        </div>
      </div>
    </div>
    </>
  )
}
