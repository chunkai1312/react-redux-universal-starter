import React, { Component, PropTypes } from 'react'
import { ListItem } from 'react-toolbox/lib/list'

class AppNavMenuItem extends Component {
  static propTypes = {
    menuItem: PropTypes.object.isRequired,
    onClick: PropTypes.func
  }

  handleClick = () => {
    if (this.props.onClick) this.props.onClick(this.props.menuItem)
  }

  render () {
    const { menuItem } = this.props

    return (
      <ListItem caption={menuItem.name} leftIcon={menuItem.icon} onClick={this.handleClick} ripple selectable />
    )
  }
}

export default AppNavMenuItem
