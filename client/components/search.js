import { Search, Container } from 'semantic-ui-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import axios from 'axios';

// const source = [
//   {
//     "title": "Blick - Streich",
//     "description": "Optional multi-tasking neural-net",
//     "image": "https://s3.amazonaws.com/uifaces/faces/twitter/anjhero/128.jpg",
//     "price": "$50.20"
//   },
//   {
//     "title": "Rogahn Inc",
//     "description": "Ergonomic optimizing moderator",
//     "image": "https://s3.amazonaws.com/uifaces/faces/twitter/ryuchi311/128.jpg",
//     "price": "$60.00"
//   },
//   {
//     "title": "Corwin, Zemlak and O'Reilly",
//     "description": "User-friendly 3rd generation orchestration",
//     "image": "https://s3.amazonaws.com/uifaces/faces/twitter/robinclediere/128.jpg",
//     "price": "$27.11"
//   },
//   {
//     "title": "Stiedemann - Murray",
//     "description": "Multi-lateral multimedia instruction set",
//     "image": "https://s3.amazonaws.com/uifaces/faces/twitter/buddhasource/128.jpg",
//     "price": "$41.54"
//   },
//   {
//     "title": "MacGyver - Harris",
//     "description": "Multi-layered directional task-force",
//     "image": "https://s3.amazonaws.com/uifaces/faces/twitter/markretzloff/128.jpg",
//     "price": "$65.74"
//   }
// ]

class SearchBar extends Component {
  constructor(props) {
    super(props);
    // this.state = {
      //   isLoading: false,
      //   results: [],
      //   value: ''
      // }
      this.handleSearchChange = this.handleSearchChange.bind(this);
      this.handleResultSelect = this.handleResultSelect.bind(this);
      // this.onSubmit = this.onSubmit.bind(this);
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
        const re = new RegExp(_.escapeRegExp(this.state.value)) // , 'i'
        axios.get(`/api/pokemon/search${re}`) // json
          // .then(pokemon => pokemon.json())
          .then(pokemon => {
            this.setState({
              isLoading: false,
              results: pokemon.data
              // results: _.filter(source, isMatch),
            })
          })
        // const isMatch = result => re.test(result.title)
    }, 500)
  }

  render() {
    // const pokemon = this.props.allPokemon;
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
        {
          // <Input
          //   icon="search"
          //   fluid
          //   placeholder="Search..."
          // />
        }
      </div>
    )
  }
}

export default withRouter(connect()(SearchBar));
