import React from 'react'
import styles from './header.module.css'


const Header = () => {
  return (
    <div className={styles.header} >
      <h1 className={styles.h1}>Todo App</h1>
      <h2 className={styles.h2}>Create | Delete | Update Task </h2>
    </div>
  )
}

export default Header
