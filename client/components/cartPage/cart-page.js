import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../store'
import axios from 'axios'

//only import what we need - below is carry-over from single-page
import { Container, Grid, Image, Dropdown, Button, Segment, Divider, Header, Table } from 'semantic-ui-react';
const ImageURL = 'https://pre00.deviantart.net/d1d9/th/pre/i/2017/051/5/3/pokemon_egg__standard_2k__by_maniraptavia-daghxb1.png';

class CartPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
        //empty state
    }
  }

  componentDidMount() {
    // axios.get("/api/cart")
  }

  render() {
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
  	console.log('cartPage rendered')
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
                <Table.Row>
                  <Table.Cell>
                    <Header as='h4' image>
                      <Image src={ImageURL} shape='rounded' size='mini' />
                      <Header.Content>
                          Pikachu
                        <Header.Subheader></Header.Subheader>
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>
                      $71.99
                  </Table.Cell>
                  <Table.Cell>
                      <div style={{float: 'right'}}><Dropdown compact defaultValue={1} search selection options={options} /></div>
                  </Table.Cell>
                </Table.Row>
               
                <Table.Row>
                  <Table.Cell>
                    <Header as='h4' image>
                      <Image src={ImageURL} shape='rounded' size='mini' />
                      <Header.Content>
                          Pikachu
                        <Header.Subheader></Header.Subheader>
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>
                      $71.99
                  </Table.Cell>
                  <Table.Cell>
                      <div style={{float: 'right'}}><Dropdown compact defaultValue={1} search selection options={options} /></div>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>
                    <Header as='h4' image>
                      <Image src={ImageURL} shape='rounded' size='mini' />
                      <Header.Content>
                          Pikachu
                        <Header.Subheader></Header.Subheader>
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>
                      $71.99
                  </Table.Cell>
                  <Table.Cell>
                      <div style={{float: 'right'}}><Dropdown compact defaultValue={1} search selection options={options} /></div>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>
                    <Header as='h4' image>
                      <Image src={ImageURL} shape='rounded' size='mini' />
                      <Header.Content>
                          Pikachu
                        <Header.Subheader></Header.Subheader>
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>
                      $71.99
                  </Table.Cell>
                  <Table.Cell>
                      <div style={{float: 'right'}}><Dropdown compact defaultValue={1} search selection options={options} /></div>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>
                    <Header as='h4' image>
                      <Image src={ImageURL} shape='rounded' size='mini' />
                      <Header.Content>
                          Pikachu
                        <Header.Subheader></Header.Subheader>
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>
                      $71.99
                  </Table.Cell>
                  <Table.Cell>
                      <div style={{float: 'right'}}><Dropdown compact defaultValue={1} search selection options={options} /></div>
                  </Table.Cell>
                </Table.Row>
                
              </Table.Body>

            </Table>
            <Divider /> 
            <div style={{float: 'right'}}> <h3>Subtotal (5 Pokemon): <span style={{color: '#E31F64'}}>71.99</span></h3></div>

          </Grid.Column>



          <Grid.Column width={4}>
            <Segment>
              <h3>Subtotal (1 item): <span style={{color: '#E31F64'}}>$71.99</span></h3>
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
}

function mapStateToProps(state) {
	return {
	}
}
export default connect(mapStateToProps, actions)(CartPage);
