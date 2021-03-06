/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {default as Wishlist} from './wishlist_container'
export {Login, Signup} from './auth-form'
export {default as AllProductsContainer} from './products_container'
export {default as Cart} from './cart_container'
export {default as SingleProductContainer} from './single_product_container'
export {default as Checkout} from './checkout-container'
export {default as ThankYou} from './thankYou'
