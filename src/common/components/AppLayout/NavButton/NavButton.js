import React from 'react'
import { IconButton } from 'react-toolbox/lib/button'
import style from './style.scss'

const NavButton = (props) => (
  <IconButton {...props} icon="menu" inverse className={style.navButton} />
)

export default NavButton
