import React from 'react'

import styles from './Left.module.sass'
import Logo from './Logo'
import GuideButton from './GuideButton'

const Left = () => {
  return (
    <div className={styles.container}>
      <GuideButton />
      <Logo />
    </div>
  )
}

export default Left
