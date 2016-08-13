import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AppBar, Panel, NavDrawer, List, ListItem } from 'react-toolbox';
import AppLayout from '../../components/AppLayout';
import AppMenuButton from '../../components/AppMenuButton';
import * as AppActions from '../../actions/AppActions';


const propTypes = {
  children: PropTypes.node,
  navDrawer: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

const contextTypes = {
  router: React.PropTypes.object,
};

class App extends Component {

  constructor(props) {
    super(props);
    this.props.actions.toggleNavDrawer = this.props.actions.toggleNavDrawer.bind(this);
  }

  to(path) {
    this.context.router.push(path);
  }

  render() {
    return (
      <AppLayout>
        <NavDrawer
          active={this.props.navDrawer.active}
          permanentAt="md"
          onOverlayClick={this.props.actions.toggleNavDrawer}
        >
          <AppBar>Punwave</AppBar>
          <List selectable ripple>
            <ListItem caption="Home" leftIcon="home" onClick={() => this.to('/')} />
            <ListItem caption="About" leftIcon="info" onClick={() => this.to('/about')} />
          </List>
          <div style={{ flex: 1 }} />
        </NavDrawer>
        <Panel>
          <AppBar>
            <AppMenuButton icon="menu" inverse onClick={this.props.actions.toggleNavDrawer} />React Seed
          </AppBar>
          <div style={{ flex: 1, overflowY: 'auto', padding: '2.4rem' }}>
            {this.props.children}
          </div>
        </Panel>
      </AppLayout>
    );
  }
}

App.propTypes = propTypes;
App.contextTypes = contextTypes;

function mapStateToProps(state) {
  return {
    navDrawer: state.navDrawer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

