import React, { FunctionComponent } from 'react'

import styles from './Header.module.sass'
import Left from './Content/Left'
import Middle from './Content/Middle'
import Right from './Content/Right'

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <div className={styles.continaer}>
      <div className={styles.content}>
        <Left />
        <Middle />
        <Right />
      </div>
    </div>
  )
}

export default Header
