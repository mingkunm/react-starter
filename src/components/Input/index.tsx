import React, { FunctionComponent } from 'react'

import styles from './Input.module.sass'

interface InputProps {
  placeholder?: string
}

const Input: FunctionComponent<InputProps> = ({ placeholder = '' }) => {
  return <input placeholder={placeholder} className={styles.input} />
}

export default Input
