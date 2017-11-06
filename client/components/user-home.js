import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Checkbox, Container, Form, Menu } from 'semantic-ui-react';


const states = [
  {
    key: 'AL',
    value: 'AL',
    text: 'Alabama',
  },
  {
    key: 'AK',
    value: 'AK',
    text: 'Alaska',
  },
  {
    key: 'AZ',
    value: 'AZ',
    text: 'Arizona',
  },
  {
    key: 'AR',
    value: 'AR',
    text: 'Arkansas',
  },
  {
    key: 'CA',
    value: 'CA',
    text: 'California',
  },
  {
    key: 'CO',
    value: 'CO',
    text: 'Colorado',
  },
  {
    key: 'CT',
    value: 'CT',
    text: 'Connecticut',
  },
  {
    key: 'DE',
    value: 'DE',
    text: 'Delaware',
  },
  {
    key: 'FL',
    value: 'FL',
    text: 'Florida',
  },
  {
    key: 'GA',
    value: 'GA',
    text: 'Georgia',
  },
  {
    key: 'HI',
    value: 'HI',
    text: 'Hawaii',
  },
  {
    key: 'ID',
    value: 'ID',
    text: 'Idaho',
  },
  {
    key: 'IL',
    value: 'IL',
    text: 'Illinois',
  },
  {
    key: 'IN',
    value: 'IN',
    text: 'Indiana',
  },
  {
    key: 'IA',
    value: 'IA',
    text: 'Iowa',
  },
  {
    key: 'KS',
    value: 'KS',
    text: 'Kansas',
  },
  {
    key: 'KY',
    value: 'KY',
    text: 'Kentucky',
  },
  {
    key: 'LA',
    value: 'LA',
    text: 'Louisiana',
  },
  {
    key: 'ME',
    value: 'ME',
    text: 'Maine',
  },
  {
    key: 'MD',
    value: 'MD',
    text: 'Maryland',
  },
  {
    key: 'MA',
    value: 'MA',
    text: 'Massachusetts',
  },
  {
    key: 'MI',
    value: 'MI',
    text: 'Michigan',
  },
  {
    key: 'MN',
    value: 'MN',
    text: 'Minnesota',
  },
  {
    key: 'MS',
    value: 'MS',
    text: 'Mississippi',
  },
  {
    key: 'MO',
    value: 'MO',
    text: 'Missouri',
  },
  {
    key: 'MT',
    value: 'MT',
    text: 'Montana',
  },
  {
    key: 'NE',
    value: 'NE',
    text: 'Nebraska',
  },
  {
    key: 'NV',
    value: 'NV',
    text: 'Nevada',
  },
  {
    key: 'NH',
    value: 'NH',
    text: 'New Hampshire',
  },
  {
    key: 'NJ',
    value: 'NJ',
    text: 'New Jersey',
  },
  {
    key: 'NM',
    value: 'NM',
    text: 'New Mexico',
  },
  {
    key: 'NY',
    value: 'NY',
    text: 'New York',
  },
  {
    key: 'NC',
    value: 'NC',
    text: 'North Carolina',
  },
  {
    key: 'ND',
    value: 'ND',
    text: 'North Dakota',
  },
  {
    key: 'OH',
    value: 'OH',
    text: 'Ohio',
  },
  {
    key: 'OK',
    value: 'OK',
    text: 'Oklahoma',
  },
  {
    key: 'OR',
    value: 'OR',
    text: 'Oregon',
  },
  {
    key: 'PA',
    value: 'PA',
    text: 'Pennsylvania',
  },
  {
    key: 'PR',
    value: 'PR',
    text: 'Puerto Rico',
  },
  {
    key: 'RI',
    value: 'RI',
    text: 'Rhode Island',
  },
  {
    key: 'SC',
    value: 'SC',
    text: 'South Carolina',
  },
  {
    key: 'SD',
    value: 'SD',
    text: 'South Dakota',
  },
  {
    key: 'TN',
    value: 'TN',
    text: 'Tennessee',
  },
  {
    key: 'TX',
    value: 'TX',
    text: 'Texas',
  },
  {
    key: 'UT',
    value: 'UT',
    text: 'Utah',
  },
  {
    key: 'VT',
    value: 'VT',
    text: 'Vermont',
  },
  {
    key: 'VI',
    value: 'VI',
    text: 'Virgin Islands',
  },
  {
    key: 'VA',
    value: 'VA',
    text: 'Virginia',
  },
  {
    key: 'WA',
    value: 'WA',
    text: 'Washington',
  },
  {
    key: 'WV',
    value: 'WV',
    text: 'West Virginia',
  },
  {
    key: 'WI',
    value: 'WI',
    text: 'Wisconsin',
  },
  {
    key: 'WY',
    value: 'WY',
    text: 'Wyoming',
  }
]


/**
 * COMPONENT
 */
export class UserHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'account',
      disabled: true
    }
  }

  handleMenuClick = (e, { name }) => this.setState({ activeItem: name })
  handleEditButton = () => this.setState({ disabled: false })
  handleSubmitButton = () => { this.setState({ disabled: true }) }


  render() {
    const { email, firstName, lastName, shippingAddress, billingAddress } = this.props.user
    const { activeItem, disabled } = this.state

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
            <Form>
              <Form.Input readOnly={disabled} label="First Name" value={firstName} />
              <Form.Input readOnly={disabled} label="Last Name" value={lastName} />
              <Form.Input required readOnly={disabled} label="Email" value={email} />
            </Form>

            <h4>Shipping Address</h4>
            <Form>
              <Form.Input required readOnly={disabled} label="Street Address" value={shippingAddress.street1} />
              <Form.Input readOnly={disabled} placeholder="Apartment, suite, etc." value={shippingAddress.street2} />
              <Form.Input required readOnly={disabled} label="City" value={shippingAddress.city} />
              <Form.Dropdown required disabled={disabled} search selection options={states} label="State" value={shippingAddress.state} />
              <Form.Input required readOnly={disabled} label="Zip Code" value={shippingAddress.zipcode} />
            </Form>

            <h4>Billing Address</h4>
            <Form>
              <Form.Input required readOnly={disabled} label="Street Address" value={billingAddress.street1} />
              <Form.Input readOnly={disabled} placeholder="Apartment, suite, etc." value={billingAddress.street2} />
              <Form.Input required readOnly={disabled} label="City" value={billingAddress.city} />
              <Form.Dropdown required disabled={disabled} search selection options={states} label="State" value={billingAddress.state} />
              <Form.Input required readOnly={disabled} label="Zip Code" value={billingAddress.zipcode} />
            </Form>
          </Container>

          <Container>
            <Button color="orange" onClick={this.handleEditButton}>Edit</Button>
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

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
