import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { AppBar } from 'react-toolbox/lib/app_bar'
import { NavDrawer, Panel } from 'react-toolbox/lib/layout'
import { AppLayout, AppTitleBar, AppNavMenu, AppNavMenuItem, AppMenuButton, AppBackButton } from 'components/AppLayout'
import * as actions from 'actions/appLayout'
import style from './style.scss'

class App extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  static propTypes = {
    appLayout: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    children: PropTypes.node
  }

  handleToggleNavDrawer = () => {
    this.props.actions.toggleNavDrawer()
  }

  handleClickBackButton = () => {
    this.props.actions.clickBackButton()
  }

  handleMenuItemClick = (menuItem) => {
    this.props.actions.clickMenuItem(menuItem)
  }

  handleAppIconClick = () => {
    this.props.actions.backToHome()
  }

  render () {
    const { appLayout, children } = this.props
    return (
      <AppLayout>
        <NavDrawer active={appLayout.navDrawer.active} permanentAt="md" onOverlayClick={this.handleToggleNavDrawer}>
          <AppTitleBar icon="static/logo.png" title={appLayout.appTitle} onIconClick={this.handleAppIconClick} />
          <AppNavMenu>
            {appLayout.navMenuItems.map((menuItem, i) =>
              <AppNavMenuItem key={i} menuItem={menuItem} onClick={this.handleMenuItemClick} />
            )}
          </AppNavMenu>
        </NavDrawer>
        <Panel>
          <AppBar>
            {appLayout.backButton.active ? (<AppBackButton onClick={this.handleClickBackButton} />) : (<AppMenuButton onClick={this.handleToggleNavDrawer} />)}
            {appLayout.pageTitle}
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
  appLayout: state.appLayout
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
