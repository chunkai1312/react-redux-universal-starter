import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { AppBar } from 'react-toolbox/lib/app_bar'
import { NavDrawer, Panel } from 'react-toolbox/lib/layout'
import { AppLayout, AppTitleBar, AppNavMenu, AppNavMenuItem, AppMenuButton } from 'components/AppLayout'
import * as actions from 'actions/layout'
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

  handleToggleNavDrawer = () => {
    this.props.actions.toggleNavDrawer()
  }

  handleMenuItemClick = (menuItem) => {
    this.props.actions.clickMenuItem(menuItem)
  }

  handleAppIconClick = () => {
    this.props.actions.backToHome()
  }

  render () {
    const { layout, children } = this.props
    return (
      <AppLayout>
        <NavDrawer active={layout.isNavDrawerActive} permanentAt="md" onOverlayClick={this.handleToggleNavDrawer}>
          <AppTitleBar icon="static/logo.png" title={layout.appName} onIconClick={this.handleAppIconClick} />
          <AppNavMenu>
            {layout.menuItems.map((menuItem, i) => <AppNavMenuItem key={i} menuItem={menuItem} onClick={this.handleMenuItemClick} />)}
          </AppNavMenu>
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
