import React, { PropTypes } from 'react'
import { AppBar } from 'react-toolbox/lib/app_bar'
import { Avatar } from 'react-toolbox/lib/avatar'
import style from './style.scss'

const AppTitleBar = ({ title, icon, onIconClick }) => (
  <AppBar className={style.appTitleBar}>
    {icon ? <Avatar image={icon} className={style.icon} onClick={onIconClick} /> : null}
    {title}
  </AppBar>
)

AppTitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onIconClick: PropTypes.func
}

export default AppTitleBar
