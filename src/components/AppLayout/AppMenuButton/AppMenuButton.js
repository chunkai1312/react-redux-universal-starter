import React from 'react'
import { IconButton } from 'react-toolbox/lib/button'
import style from './style.scss'

const AppMenuButton = (props) => (
  <IconButton {...props} icon="menu" inverse className={style.appMenuButton} />
)

export default AppMenuButton
