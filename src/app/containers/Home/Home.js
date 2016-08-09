/* eslint react/prefer-stateless-function: 0 */

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Increment from '../../components/Increment';
import Decrement from '../../components/Decrement';
import Display from '../../components/Display';
import * as CounterActions from '../../actions/CounterActions';

const propTypes = {
  counter: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

class Home extends Component {
  render() {
    return (
      <div>
        <div>Home</div>
        <Increment actions={this.props.actions} />
        <Decrement actions={this.props.actions} />
        <Display counter={this.props.counter} />
      </div>
    );
  }
}

Home.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
