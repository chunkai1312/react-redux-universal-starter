import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { NavDrawer, Panel, AppBar, List, ListItem } from 'react-toolbox'
import { AppLayout, AppMenuButton } from '../components'
import * as actions from '../actions/application'

class App extends Component {
  constructor (props) {
    super(props)
    this.handleToggleNavDrawer = this.handleToggleNavDrawer.bind(this)

    this.menuItems = [
      { name: 'Home', icon: 'home', path: '/' },
      { name: 'About', icon: 'info', path: '/about' }
    ]

    this.menuItems.forEach((item, i) => {
      this.handleChangeRoute[i] = this.handleChangeRoute.bind(this, item.path)
    })
  }

  handleToggleNavDrawer () {
    this.props.actions.toggleNavDrawer()
  }

  handleChangeRoute (path) {
    this.context.router.push(path)
  }

  render () {
    const { application, children } = this.props
    return (
      <AppLayout>
        <NavDrawer active={application.navDrawer.active} permanentAt="md" onOverlayClick={this.handleToggleNavDrawer}>
          <div>
            <AppBar>{application.name}</AppBar>
            <List selectable ripple>
              {this.menuItems.map((item, i) =>
                <ListItem key={i} caption={item.name} leftIcon={item.icon} onClick={this.handleChangeRoute[i]} />
              )}
            </List>
          </div>
        </NavDrawer>
        <Panel>
          <div>
            <AppBar>
              <AppMenuButton icon="menu" inverse onClick={this.handleToggleNavDrawer} />
              {application.pageTitle}
            </AppBar>
            <div style={{ flex: 1, overflowY: 'auto', padding: '2.4rem' }}>
              {children}
            </div>
          </div>
        </Panel>
      </AppLayout>
    )
  }
}

App.propTypes = {
  application: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  children: PropTypes.node
}

App.contextTypes = {
  router: React.PropTypes.object
}

const mapStateToProps = (state) => ({
  application: state.application
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
