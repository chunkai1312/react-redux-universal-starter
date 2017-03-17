import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { HomePage } from '../components'
import * as actions from '../actions'

const mapStateToProps = (state) => ({
  routing: state.routing,
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

const Home = connect(mapStateToProps, mapDispatchToProps)(HomePage)

export default Home
