import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { NavDrawer, Panel, AppBar, List, ListItem } from 'react-toolbox'
import { AppLayout, AppMenuButton } from '../components'
import * as actions from '../actions/layout'

class App extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  static propTypes = {
    layout: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    children: PropTypes.node
  }

  constructor (props) {
    super(props)
    this.handleToggleNavDrawer = this.handleToggleNavDrawer.bind(this)
    props.layout.menuItems.forEach((menuItem, i) => {
      this.handleMenuItemClick[i] = this.handleMenuItemClick.bind(this, menuItem)
    })
  }

  handleToggleNavDrawer () {
    this.props.actions.toggleNavDrawer()
  }

  handleMenuItemClick (menuItem) {
    this.props.actions.clickMenuItem(menuItem)
  }

  render () {
    const { layout, children } = this.props
    return (
      <AppLayout>
        <NavDrawer active={layout.isNavDrawerActive} permanentAt="md" onOverlayClick={this.handleToggleNavDrawer}>
          <AppBar>{layout.appName}</AppBar>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            <List selectable ripple>
              {layout.menuItems.map((item, i) =>
                <ListItem key={i} caption={item.name} leftIcon={item.icon} onClick={this.handleMenuItemClick[i]} />
              )}
            </List>
          </div>
        </NavDrawer>
        <Panel>
          <AppBar>
            <AppMenuButton icon="menu" inverse onClick={this.handleToggleNavDrawer} />
            {layout.pageTitle}
          </AppBar>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {children}
          </div>
        </Panel>
      </AppLayout>
    )
  }
}

const mapStateToProps = (state) => ({
  layout: state.layout
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
