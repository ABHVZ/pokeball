import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../store'

//only import what we need - below is carry-over from single-page
import { Container, Grid, Image, Input, Button, Table, Dropdown } from 'semantic-ui-react';

class CartPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
        //empty state
    }
  }

  componentDidMount() {
  }

  render() {
  	console.log('cartPage rendered')
    return (
        <h1>Cart Page is displaying</h1>
    )
  }
}

function mapStateToProps(state) {
	return {
	}
}
export default connect(mapStateToProps, actions)(CartPage);
