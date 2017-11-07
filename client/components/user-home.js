import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Container, Form, Menu } from 'semantic-ui-react';
import { update } from '../store'

const statesArr = ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY']
const states = statesArr.map(state => { return { key: state, value: state, text: state } });

/**
 * COMPONENT
 */
export class UserHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'account',
      user: props.user
    }
  }

  handleMenuClick = (evt, { name }) => this.setState({ activeItem: name })
  updateUserInfo = (evt) => {
    const user = Object.assign({}, this.state.user);
    user[evt.target.name] = evt.target.value;
    this.setState({ user });
    console.log(this.state)
  }
  updateShippingAddress = (evt, data) => {
    const user = Object.assign({}, this.state.user);
    console.log(data)
    user.shippingAddress[evt.target.name] = evt.target.value;
    this.setState({ user });
  }
  updateShippingState = (evt, { value }) => {
    const user = Object.assign({}, this.state.user);
    user.shippingAddress.state = value;
    this.setState({ user });
  }
  updateBillingAddress = (evt) => {
    const user = Object.assign({}, this.state.user);
    user.billingAddress[evt.target.name] = evt.target.value;
    this.setState({ user });
  }
  updateBillingState = (evt, { value }) => {
    const user = Object.assign({}, this.state.user);
    user.billingAddress.state = value;
    this.setState({ user });
  }
  handleSubmitButton = () => {
    this.props.submitUserInfo(this.state.user);
  }

  render() {
    const { email, firstName, lastName, shippingAddress, billingAddress } = this.state.user
    const { activeItem } = this.state

    return (
      <div className="home-page-container">
        <div className="sidebar">
          <Menu vertical>
            <Menu.Item name="account" active={activeItem === 'account'} href="/home" onClick={this.handleMenuClick}>Account</Menu.Item>
            <Menu.Item name="orders" active={activeItem === 'orders'} href="/user/orders" onClick={this.handleMenuClick}>Orders</Menu.Item>
            <Menu.Item name="settings" active={activeItem === 'settings'} href="/user/settings" onClick={this.handleMenuClick}>Settings</Menu.Item>
          </Menu>
        </div>

        <Container>
          <h3>Welcome, {email}</h3>
          <h4>General Information</h4>
          <Container>
            <Form onChange={this.updateUserInfo}>
              <Form.Input name="firstName" label="First Name" value={firstName} />
              <Form.Input name="lastName" label="Last Name" value={lastName} />
              <Form.Input required name="email" label="Email" value={email} />
            </Form>

            <h4>Shipping Address</h4>
            <Form onChange={this.updateShippingAddress}>
              <Form.Input required name="street1" label="Street Address" value={shippingAddress.street1} />
              <Form.Input name="street2" placeholder="Apartment, suite, etc." value={shippingAddress.street2} />
              <Form.Input required name="city" label="City" value={shippingAddress.city} />
              <Form.Dropdown required search selection onChange={this.updateShippingState} options={states} name="state" label="State" value={shippingAddress.state} />
              <Form.Input required name="zipcode" label="Zip Code" value={shippingAddress.zipcode} />
            </Form>

            <h4>Billing Address</h4>
            <Form onChange={this.updateBillingAddress}>
              <Form.Input required name="street1" label="Street Address" value={billingAddress.street1} />
              <Form.Input name="street2" placeholder="Apartment, suite, etc." value={billingAddress.street2} />
              <Form.Input required name="city" label="City" value={billingAddress.city} />
              <Form.Dropdown required search selection onChange={this.updateBillingState} options={states} name="state" label="State" value={billingAddress.state} />
              <Form.Input required name="zipcode" label="Zip Code" value={billingAddress.zipcode} />
            </Form>
          </Container>

          <Container>
            <Button color="green" onClick={this.handleSubmitButton}>Submit</Button>
          </Container>
        </Container>

      </div >
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    user: state.user
  }
}

const mapDispatch = (dispatch) => ({
  submitUserInfo(user) {
    dispatch(update(user))
  }
})

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
