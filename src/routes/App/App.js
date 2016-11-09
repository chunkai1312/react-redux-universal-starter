import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { NavDrawer, Panel, AppBar, List, ListItem } from 'react-toolbox'
import { AppLayout, AppMenuButton } from '../../components'
import actions from '../../redux/actions'
import style from './style.scss'

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
          <nav className={style.menu}>
            <List selectable ripple>
              {layout.menuItems.map((item, i) =>
                <ListItem key={i} caption={item.name} leftIcon={item.icon} onClick={this.handleMenuItemClick[i]} />
              )}
            </List>
          </nav>
        </NavDrawer>
        <Panel>
          <AppBar>
            <AppMenuButton onClick={this.handleToggleNavDrawer} />
            {layout.pageTitle}
          </AppBar>
          <section className={style.mainContent}>
            {children}
          </section>
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
