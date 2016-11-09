import { actionCreators as layoutActions } from './modules/layout'
import { actionCreators as counterActions } from './modules/counter'

export default { ...layoutActions, ...counterActions }
