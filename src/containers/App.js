import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { AppLayout } from '../components'
import * as actions from '../actions'

const mapStateToProps = (state) => ({
  routing: state.routing,
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

const App = connect(mapStateToProps, mapDispatchToProps)(AppLayout)

export default App
