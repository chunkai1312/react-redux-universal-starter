import React, { PropTypes } from 'react'
import { List } from 'react-toolbox/lib/list'
import style from './style.scss'

const NavMenu = (props) => (
  <nav className={style.navMenu}>
    <List {...props} ripple selectable>
      {props.children}
    </List>
  </nav>
)

NavMenu.propTypes = {
  children: PropTypes.node.isRequired
}

export default NavMenu
