import React, { Component } from 'react';
import { Input, Menu, Button, Image, Icon, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home'
    }
  }

  handleItemClick = (elem, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
      <Container>
        <Menu fixed="top">

          <NavLink to="/" activeClassName="active">
            <Menu.Item
              header
              as="a"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
              name="home">
              <Image
                size="mini"
                className="shake"
                src="/pokeball.png"
                style={{ marginRight: '1.5em' }}
              />
              PokeBall
            </Menu.Item>
          </NavLink>

          <Menu.Item>
            <Input
              icon="search"
              fluid
              placeholder="Search..."
            />
          </Menu.Item>

          <Menu.Menu position="right">

          {
            // // TODO: only show profile in leiu of log in/sign up if logged in
            // <Menu.Item
            //   name="profile"
            //   active={activeItem === 'profile'}
            //   onClick={this.handleItemClick} />
          }

          <NavLink to="/login" activeClassName="active">
            <Menu.Item className="item">
              <Button compact as="a">
                Log In
              </Button>
            </Menu.Item>
          </NavLink>

          <NavLink to="/signup" activeClassName="active">
            <Menu.Item className="item">
              <Button compact as="a" primary>
                Sign Up
              </Button>
            </Menu.Item>
          </NavLink>

          <NavLink to="/cart" activeClassName="active">
              <Menu.Item className="item">
              <Button animated="vertical" compact>
                <Button.Content hidden>
                  Cart
                </Button.Content>
                <Button.Content visible>
                  <Icon name="shop" />
                </Button.Content>
              </Button>
            </Menu.Item>
          </NavLink>

          </Menu.Menu>

        </Menu>
</Container>
      </div>
    )
  }
}

export default withRouter(connect()(Navbar));
