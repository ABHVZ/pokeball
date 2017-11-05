import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../store'
import axios from 'axios'

//only import what we need - below is carry-over from single-page
import { Container, Grid, Image, Button, Segment, Divider, Header, Table } from 'semantic-ui-react';
import CartItem from './cart-item'
const ImageURL = 'https://pre00.deviantart.net/d1d9/th/pre/i/2017/051/5/3/pokemon_egg__standard_2k__by_maniraptavia-daghxb1.png';

class CartPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
        cartItems: {}
    }
  }

  componentDidMount() {
    console.log('componentDidMount in cartpage')
    console.log(this.props)
    this.props.fetchCartFromSession()
  }

  render() {

    if (this.props.cart) {
      const cart = Object.values(this.props.cart)
      const CartItems = cart.map(item => {
        return <CartItem 
          qty={item.qty} 
          name={item.pokemon.name} 
          price={item.pokemon.price} 
          id={item.pokemon.id} 
          editPokemonInSession={this.props.editPokemonInSession}
          deletePokemonInSession={this.props.deletePokemonInSession}
          />
      })
      const totalPrice = cart.reduce(function(acc, cur) { return acc + cur.pokemon.price * cur.qty }, 0)
      const totalPokemon = cart.reduce(function(acc, cur) { return acc + 1 * cur.qty }, 0)
      
      return (
        <Container style={{paddingTop: '1em'}}>
          <Grid divided='vertically'>
          <Grid.Row>
            <Grid.Column width={12}>

                <Table basic='very'>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Shopping Cart</Table.HeaderCell>
                    <Table.HeaderCell>Price</Table.HeaderCell>
                    <Table.HeaderCell><div style={{float: 'right'}}>Quantity</div></Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  
                  {CartItems}
                </Table.Body>

              </Table>
              <Divider /> 
              <div style={{float: 'right'}}> <h3>Subtotal ({totalPokemon} Pokemon): <span style={{color: '#E31F64'}}>{`$${totalPrice}`}</span></h3></div>

            </Grid.Column>



            <Grid.Column width={4}>
              <Segment>
                <h3>Subtotal ({totalPokemon} Pokemon): <span style={{color: '#E31F64'}}>{`$${totalPrice}`}</span></h3>
                <Divider />
                <div style={{textAlign: 'center'}}>
                <Button>Proceed to checkout</Button></div>
                
              </Segment>
            </Grid.Column>
          </Grid.Row>

          
        </Grid>
        </Container>
      )    
    }
   else return <div>Loading</div>
  }
}

function mapStateToProps(state) {
	return {
    cart: state.session.cart
	}
}
export default connect(mapStateToProps, actions)(CartPage);
