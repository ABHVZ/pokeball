/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export { default as Main } from './main'
export { default as UserHome } from './user-home'
export { Login, Signup } from './auth-form'
export { default as HomePage } from './homePage/home-page'
export { default as Navbar } from './navbar'
export { default as SinglePage } from './singlePage/single-page'
export { default as CartPage } from './cartPage/cart-page'
export { default as CartAddedPage } from './cartPage/cart-added-page'
export { default as CheckoutPage } from './checkoutPage/checkout-page'

