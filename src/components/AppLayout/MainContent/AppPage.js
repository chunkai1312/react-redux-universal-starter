import React, { PropTypes } from 'react'
import style from './style.scss'

const MainContent = ({ children }) => {
  return (
    <section className={style.mainContent}>
      {children}
    </section>
  )
}

MainContent.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainContent
