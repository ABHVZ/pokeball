import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../store'
import { Link } from 'react-router-dom'

import { Container, Grid, Button, Segment, Divider, List, Dropdown, Form, Modal, Icon } from 'semantic-ui-react';

export class CheckoutPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      shippingCost: 50,
      open: false,
      firstName: '',
      middleName: '',
      lastName: '',
      streetNumber: '',
      streetName: '',
      city: '',
      state: '',
      zip: '',
      cardNumber: '',
      cardType: ''
    }

    this.handleShipppingDropdown = this.handleShipppingDropdown.bind(this)
    this.handleCreditDropdown = this.handleCreditDropdown.bind(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  componentDidMount() {
    this.props.fetchCartFromSession()
  }

  handleShipppingDropdown(e, data) {
    this.setState({ shippingCost: data.value })
  }

  handleCreditDropdown(e, data) {
    this.setState({ cardType: data.value })
  }

  open() {
    this.setState({ open: true })
  }

  close() {
    this.setState({ open: false })
  }

  changeHandler(e, key) {
    this.setState({ [key]: e.target.value })
    console.log(e.target.value);
  }


  render() {
    let shippingTotal = this.state.shippingCost.toFixed(2)
    let beforeTax = (this.props.totalPrice + this.state.shippingCost).toFixed(2)
    let tax = (parseFloat(beforeTax) * (0.07)).toFixed(2)
    let total = (parseFloat(beforeTax) + parseFloat(tax)).toFixed(2)

    const shippingOptions = [
      { key: 1, text: 'Overnight Shipping ($50)', value: 50 },
      { key: 2, text: 'One-Day Shipping ($30)', value: 30 },
      { key: 3, text: 'Two-Day Shipping ($20)', value: 20 },
      { key: 4, text: 'Regular Mail ($5.00)', value: 5 }
    ]

    const cardOptions = [
      { key: 'v', text: 'visa', value: 'visa' },
      { key: 'm', text: 'masterCard', value: 'masterCard' },
      { key: 'a', text: 'Amex', value: 'Amex' }
    ]

    return (
      <Container style={{ paddingTop: '1em' }}>
        <Grid divided="vertically">

          <Grid.Column width={12}>
            <List divided verticalAlign="middle">

              <List.Item>
                <Grid>
                  <Grid.Column width={5}>
                    <h3>Shipping Address:</h3>
                  </Grid.Column>
                  <Grid.Column width={11}>
                    <Form>
                      <Form.Group>
                        <Form.Input label='First name' placeholder='First Name' width={5} onChange={(e) => this.changeHandler(e, 'firstName')} />
                        <Form.Input label='Middle Name' placeholder='Middle Name' width={3} onChange={(e) => this.changeHandler(e, 'middleName')} />
                        <Form.Input label='Last Name' placeholder='Last Name' width={5} onChange={(e) => this.changeHandler(e, 'lastName')} />
                      </Form.Group>
                      <Form.Group>
                        <Form.Input placeholder='Street Number' width={2} onChange={(e) => this.changeHandler(e, 'streetNumber')} />
                        <Form.Input placeholder='Street Name' width={11} onChange={(e) => this.changeHandler(e, 'streetName')} />
                      </Form.Group>
                      <Form.Group>
                        <Form.Input placeholder='City' width={4} onChange={(e) => this.changeHandler(e, 'City')} />
                        <Form.Input placeholder='State' width={4} onChange={(e) => this.changeHandler(e, 'State')} />
                        <Form.Input placeholder='Zip' width={3} onChange={(e) => this.changeHandler(e, 'zip')} />
                      </Form.Group>
                    </Form>
                  </Grid.Column>
                </Grid>
              </List.Item>

              <List.Item>
                <Grid>
                  <Grid.Column width={5}>
                    <h3>Payment Method:</h3>
                  </Grid.Column>
                  <Grid.Column width={11}>
                    <Form>
                      <Form.Group>
                        <Form.Input label="Card Number" placeholder="Card Number" width="8" onChange={(e) => this.changeHandler(e, 'cardNumber')} />
                        <Form.Input label="CCV" placeholder="CCV" width="2" />
                        <Form.Input label="Exp" placeholder="Expiration" width="2" />
                      </Form.Group>
                      <Form.Checkbox label="I agree to the Terms and Conditions" />
                    </Form>
                      <Form.Select options={cardOptions} placeholder="Credit Type" width="3" onChange={this.handleCreditDropdown} />
                  </Grid.Column>
                </Grid>
              </List.Item>

              <List.Item>
                <Grid>
                  <Grid.Column width={5}>
                    <h3>Shipping Method:</h3>
                  </Grid.Column>
                  <Grid.Column width={11}>
                    <Dropdown defaultValue={50} onChange={this.handleShipppingDropdown} search selection options={shippingOptions} />
                  </Grid.Column>
                </Grid>
              </List.Item>
            </List>
          </Grid.Column>

          <Grid.Column width={4}>
            <Segment>
              <h3>Order Summary</h3><br />
              <h9>Total Items: {this.props.totalQuantity}</h9><br />
              <h9>Shipping and Handling: ${shippingTotal}</h9><br />
              <h9>Total Before Tax: ${beforeTax}</h9><br />
              <h9>Estimated Tax: ${tax}</h9><br />
              <Divider />
              <h4 style={{ color: '#E31F64' }}>Order Total: ${total}</h4>
              <Divider />
              <div style={{ textAlign: 'center' }}>
                <Modal
                  dimmer={false}
                  open={this.state.open}
                  onOpen={this.open}
                  onClose={this.close}
                  size='small'
                  trigger={<Button primary icon>Place Order<Icon name='right chevron' /></Button>}
                >
                  <Modal.Header>Order Processed &amp; Confirmation Sent</Modal.Header>
                  <Modal.Content>
                    <div>
                      <h4>Shipping Address:</h4>
                      <p>
                        {this.state.firstName} {this.state.middleName} {this.state.lastName}<br />
                        {this.state.streetNumber} {this.state.streetName}<br />
                        {this.state.city}, {this.state.state} {this.state.zip}<br />
                      </p>
                    </div>

                    <div>
                      <h4>Payment &amp; Shipping Method:</h4>
                      <p>
                        Paid with {this.state.cardType} ending with xxxxxxxx{this.state.cardNumber.slice(-4)} <br />
                      </p>
                    </div>

                    {/* <div>
                      <h4>Total Charged:</h4>
                      <p>
                        {this.state.firstName} {this.state.middleName} {this.state.lastName}<br />
                        {this.state.streetNumber} {this.state.streetName}<br />
                        {this.state.city}, {this.state.state} {this.state.zip}<br />
                      </p>
                    </div> */}
                  </Modal.Content>
                  <Modal.Actions>
                    <Link to="/homepage" ><Button icon='check' content='All Done' onClick={this.close} /></Link>
                  </Modal.Actions>
                </Modal>
              </div>
            </Segment>
          </Grid.Column>

        </Grid>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.session.cart,
    totalPrice: state.session.totalPrice,
    totalQuantity: state.session.totalQuantity,
  }
}
export default connect(mapStateToProps, actions)(CheckoutPage);
