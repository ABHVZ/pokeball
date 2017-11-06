import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../store'

import { Container, Grid, Button, Segment, Divider, List } from 'semantic-ui-react';

class CheckoutPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    this.props.fetchCartFromSession()
  }

  render() {
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
                    <h4>Placeholder for CreditCard Form</h4>
                  </Grid.Column>
                </Grid>
              </List.Item>

              <List.Item>
                <Grid>
                  <Grid.Column width={5}>
                    <h3>Shipping Method:</h3>
                  </Grid.Column>
                  <Grid.Column width={11}>
                    <h4>Placeholder for Shipping Method Table</h4>
                  </Grid.Column>
                </Grid>
              </List.Item>
            </List>
          </Grid.Column>

          <Grid.Column width={4}>
            <Segment>
              <h3>Order Summary</h3><br />
              <h9>Items:</h9><br />
              <h9>Shipping and Handling:</h9><br />
              <h9>Total Before Tax:</h9><br />
              <h9>Estimated Tax:</h9><br />
              <Divider />
              <h4 style={{ color: '#E31F64' }}>Order Total: ${this.props.totalPrice}</h4>
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
