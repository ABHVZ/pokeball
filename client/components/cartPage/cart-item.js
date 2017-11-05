import React, { Component } from 'react';
import { Image, Dropdown, Header, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ImageURL = 'https://pre00.deviantart.net/d1d9/th/pre/i/2017/051/5/3/pokemon_egg__standard_2k__by_maniraptavia-daghxb1.png';
const options = [
		    { key: 1, text: '1', value: 1 },
		    { key: 2, text: '2', value: 2 },
		    { key: 3, text: '3', value: 3 },
		    { key: 4, text: '4', value: 4 },
		    { key: 5, text: '5', value: 5 },
		    { key: 6, text: '6', value: 6 },
		    { key: 7, text: '7', value: 7 },
		    { key: 8, text: '8', value: 8 },
		    { key: 9, text: '9', value: 9 },
		  ]

class CartItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			dropdownValue: this.props.qty
		}
		this.handleDropdown = this.handleDropdown.bind(this)
	}

	handleDropdown(e, data) {
		this.setState({ dropdownValue: data.value })
		console.log(data.value)
		this.props.editPokemonInSession(data.value, this.props.id)
	}

	render() {
		
		console.log('CartItem props', this.props)	
		const { qty, name, price, id } = this.props		

		return(
			<Table.Row>
				<Table.Cell>
				<Header as='h3' image>
				  <Image src={ImageURL} shape='rounded' size='mini' />
				  <Header.Content>
				   <Link to={`/pokemon/${id}`}>
				      {name}
				      </Link>
				    <Header.Subheader 
				    	size='tiny'
				    	onClick={() => this.props.deletePokemonInSession(id)}
				    	>Delete
			    	</Header.Subheader>
				  </Header.Content>
				
				</Header>
				</Table.Cell>
				<Table.Cell>
					{`$${price}`}
				</Table.Cell>
				<Table.Cell>
				  <div style={{float: 'right'}}><Dropdown compact onChange={this.handleDropdown} defaultValue={qty} search selection options={options} /></div>
				</Table.Cell>
			</Table.Row>
		)
	}
}

export default CartItem