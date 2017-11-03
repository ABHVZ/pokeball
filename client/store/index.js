import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


/**
 * INDIVIDUAL REDUCERS/STATES
 */
import user from './user'
import allPokemon from './allPokemon'
import singlePokemon from './singlePokemon'
import maxPriceFilter from './maxPriceFilter'
import minPriceFilter from './minPriceFilter'



const reducer = combineReducers({
  user,
  allPokemon,
  singlePokemon,
  minPriceFilter,
  maxPriceFilter
})


const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
))


const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './allPokemon'
export * from './singlePokemon'
export * from './minPriceFilter'
export * from './maxPriceFilter'

