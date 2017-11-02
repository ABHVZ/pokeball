import { Input } from 'semantic-ui-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    }
  }

  render() {
    return (
      <Input
        icon="search"
        fluid
        placeholder="Search..."
      />
    )
  }
}

export default withRouter(connect()(Search));
