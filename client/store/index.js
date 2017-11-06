import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


/**
 * INDIVIDUAL REDUCERS/STATES
 */
import user from './user'
import allPokemon from './allPokemon'
import reviews from './reviews'
import singlePokemon from './singlePokemon'
import maxPriceFilter from './maxPriceFilter'
import minPriceFilter from './minPriceFilter'
import maxHPFilter from './maxHPFilter'
import minHPFilter from './minHPFilter'
import maxATKFilter from './maxATKFilter'
import minATKFilter from './minATKFilter'
import cart from './cart'


const reducer = combineReducers({
  user,
  allPokemon,
  singlePokemon,
  minPriceFilter,
  maxPriceFilter,
  maxHPFilter,
  minHPFilter,
  minATKFilter,
  maxATKFilter,
  reviews,
  cart
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
export * from './maxHPFilter'
export * from './minHPFilter'
export * from './maxATKFilter'
export * from './minATKFilter'
export * from './reviews'
export * from './cart'

