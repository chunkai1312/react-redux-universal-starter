import React, { PropTypes } from 'react'
import { List } from 'react-toolbox/lib/list'
import style from './style.scss'

const AppNavMenu = (props) => (
  <nav className={style.appNavMenu}>
    <List {...props} ripple selectable>
      {props.children}
    </List>
  </nav>
)

AppNavMenu.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppNavMenu
