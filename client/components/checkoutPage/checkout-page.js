import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../store'

import { Container, Grid, Button, Segment, Divider, List, Dropdown, Form } from 'semantic-ui-react';

export class CheckoutPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      shippingCost: 50
    }

    this.handleDropdown = this.handleDropdown.bind(this)

  }

  componentDidMount() {
    this.props.fetchCartFromSession()
  }

  handleDropdown(e, data) {
    this.setState({ shippingCost: data.value })
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
                    <h4>Placeholder for Address</h4>
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
                        <Form.Input label="Card Number" placeholder="Card Number"  />
                        <Form.Input label="CCV" placeholder="CCV"  />
                        <Form.Input label="Exp" placeholder="Expiration"  />
                      </Form.Group>
                      <Form.Select options={cardOptions} placeholder="Credit Type"  />
                      <Form.Checkbox label="I agree to the Terms and Conditions"  />
                    </Form>
                  </Grid.Column>
                </Grid>
              </List.Item>

              <List.Item>
                <Grid>
                  <Grid.Column width={5}>
                    <h3>Shipping Method:</h3>
                  </Grid.Column>
                  <Grid.Column width={11}>
                    <Dropdown defaultValue={50} onChange={this.handleDropdown} search selection options={shippingOptions} />
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
                <Button>Place Order</Button>
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
