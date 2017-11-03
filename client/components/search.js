import { Input } from 'semantic-ui-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

class Search extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isLoading: false,
    //   results: [],
    //   value: ''
    // }
    // this.handleSearch = this.handleSearch.bind(this);
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

  handleSelect = (elem, { selection }) => this.setState({ value: selection.name });

  handleChange = (elem, { value }) => {
    this.setState({ isLoading: true, value })
    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();
      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 500)
  }

  render() {
    const pokemon = this.props.allPokemon;
    const { isLoading, value, results } = this.state

    return (
      <div>
        <Search
          fluid
          loading={isLoading}
          onResultsSelect={this.handleSelect}
          onSearchChange={this.handleChange}
          results={results}
          value={value}
          {...this.props}
        />
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

export default withRouter(connect()(Search));
