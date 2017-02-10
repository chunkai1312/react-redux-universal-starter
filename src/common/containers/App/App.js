import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { AppBar } from 'react-toolbox/lib/app_bar'
import { NavDrawer, Panel } from 'react-toolbox/lib/layout'
import { AppLayout, AppTitleBar, NavMenu, NavMenuItem, NavButton, BackButton } from '../../components/AppLayout'
import * as actions from '../../actions/appLayout'
import config from '../../../config'
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
        <Helmet {...config.app.head} />
        <NavDrawer active={appLayout.navDrawer.active} permanentAt="md" onOverlayClick={this.handleToggleNavDrawer}>
          <AppTitleBar icon={require('./logo.png')} title={appLayout.appTitle} onIconClick={this.handleAppIconClick} />
          <NavMenu>
            {appLayout.navMenuItems.map((menuItem, i) =>
              <NavMenuItem key={i} menuItem={menuItem} onClick={this.handleMenuItemClick} />
            )}
          </NavMenu>
        </NavDrawer>
        <Panel>
          <AppBar>
            {appLayout.backButton.active ? (<BackButton onClick={this.handleClickBackButton} />) : (<NavButton onClick={this.handleToggleNavDrawer} />)}
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
