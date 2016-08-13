/* eslint react/prefer-stateless-function: 0 */

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../../components/Counter';
import * as CounterActions from '../../actions/CounterActions';

const propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
};

class Home extends Component {
  render() {
    return (
      <div>
        <Counter counter={this.props.counter} actions={this.props.actions} />
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
