import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
import { logout } from '../store'
import Search from './search';
import { Icon } from 'semantic-ui-react';

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {

    const { children, isLoggedIn, handleLogOut } = props
    return (
        <div>
            <nav>
                {
                    <div className="navbar">
                        <Search />

                        <NavLink to="/homepage" id="logo-container">
                            <img src="/pokeball.png" />
                        </NavLink>

                        <NavLink to="/homepage" className="link">
                            <span id="head">P O K É B A L L</span>
                        </NavLink>

                        {
                            isLoggedIn
                                ? <NavLink to="/homepage" className="link" id="link-left-space" onClick={handleLogOut}>
                                    LOG OUT
                                  </NavLink>

                                : <div>
                                    <NavLink to="/login" className="link" id="link-left-space">
                                        LOG IN
                                    </NavLink>
                                    <NavLink to="/signup" className="link">
                                        SIGN UP
                                    </NavLink>
                                </div>
                        }

                        <NavLink to="/cart" className="link">
                            <Icon name="shopping bag" />
                        </NavLink>
                    </div >
                }
            </nav>
            {children}
            <footer>
                <button className="footer-elements">For US Residents Only</button>
                <button className="footer-elements">Customer Service</button>
                <button className="footer-elements">Pokéball Corporate</button>
                <button className="footer-elements">Careers</button>
                <button className="footer-elements">Terms & Conditions</button>
                <button className="footer-elements">Privacy Policy</button>
                <button className="footer-elements">Authenticity</button>
                <button className="footer-elements">1-203-098-6723</button>
            </footer>
        </div>
    )

}

/**
 * CONTAINER
 */
const mapState = (state) => {
    return {
        isLoggedIn: !!state.user.id
    }
}

const mapDispatch = (dispatch) => {
    return {
        handleLogOut() {
            dispatch(logout())
        }
    }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
    children: PropTypes.object,
    handleLogOut: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
}
