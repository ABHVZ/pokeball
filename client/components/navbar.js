import React, { Component } from 'react';
import { Input, Container, Menu, Button, Image, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home'
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing fixed="top">

          {
            // <Container>
          }

            <Menu.Item
              as="a"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
              header
              name="home">
              <Image
                size="mini"
                src="/pokeball.png"
                style={{ marginRight: '1.5em' }}
              />
              PokeBall
            </Menu.Item>

            {//<Menu.Item
              //   name="home"
              //   active={activeItem === 'home'}
              //   onClick={this.handleItemClick} />
            }

            <Menu.Menu position="right">

              <Menu.Item
                name="profile"
                active={activeItem === 'profile'}
                onClick={this.handleItemClick} />

              <Menu.Item className="item">
                <Button compact as="a">
                  Log In
                </Button>
              </Menu.Item>

              <Menu.Item>
                <Button compact as="a" primary>
                  Sign Up
                </Button>
              </Menu.Item>
            {
              // <div className="ui compact vertical animated button" tabIndex="0">
              //   <div className="hidden content">
              //     Shop
              //   </div>
              //   <div className="visible content">
              //     <Icon name="shopping cart" />
              //   </div>
              // </div>
            }
            <Button animated="vertical" compact size="small">
                <Button.Content hidden>Cart</Button.Content>
                <Button.Content visible>
                  <Icon name="shop" />
                </Button.Content>
              </Button>

              <Menu.Item>
                <Input
                icon="search"
                placeholder="Search..." />
              </Menu.Item>

            </Menu.Menu>

            {
            // </Container>
            }
        </Menu>

      </div>
    )
  }
}

export default connect()(Navbar);
