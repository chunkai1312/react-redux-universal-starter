import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { AboutPage } from '../components'
import * as actions from '../actions'

const mapStateToProps = (state) => ({
  routing: state.routing,
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

const About = connect(mapStateToProps, mapDispatchToProps)(AboutPage)

export default About
