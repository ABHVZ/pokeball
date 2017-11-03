import { Search, Container } from 'semantic-ui-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import axios from 'axios';

class SearchBar extends Component {
  constructor(props) {
    super(props);
      this.handleSearchChange = this.handleSearchChange.bind(this);
      this.handleResultSelect = this.handleResultSelect.bind(this);
    }

    componentWillMount() {
      this.resetComponent()
    }

    resetComponent = () => this.setState({
      isLoading: false,
      results: [],
      value: ''
    })

    handleResultSelect = (elem, { result }) => this.setState({ value: result.name })

    handleSearchChange = (elem, { value }) => {
      this.setState({ isLoading: true, value })
      setTimeout(() => {
        if (this.state.value.length < 1) return this.resetComponent();
        const re = new RegExp(_.escapeRegExp(this.state.value))
        axios.get(`/api/pokemon/search${re}`)
          .then(pokemon => {
            this.setState({
              isLoading: false,
              results: pokemon.data
            })
          })
    }, 500)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <div>

      <Container fluid>
          <Search
            fluid
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
            {...this.props}
          />
      </Container>
      </div>
    )
  }
}

export default withRouter(connect()(SearchBar));
