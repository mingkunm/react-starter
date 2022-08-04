import React from 'react'

import styles from './GuideButton.module.sass'

const GuideButton = () => {
  return (
    <div className={styles.container}>
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        style={{
          pointerEvents: 'none',
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      >
        <g>
          <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z" />
        </g>
      </svg>
    </div>
  )
}

export default GuideButton
