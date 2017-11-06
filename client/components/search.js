import { Search } from 'semantic-ui-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            results: [],
            inputValue: '',
            startSearch: false
        }
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleResultSelect = this.handleResultSelect.bind(this);
    }

    render() {
        const { isLoading, inputValue, results } = this.state
        return (
            <div className="search-container">
                <Search
                    loading={isLoading}
                    onSearchChange={this.handleSearchChange}
                    onResultSelect={this.handleResultSelect}
                    results={results}
                    value={inputValue}
                />
            </div>
        )
    }

    handleSearchChange(event) {
        let foundResults = this.props.allPokemon.filter(pokemon => pokemon.name.toLowerCase()
            .includes(event.target.value.toLowerCase())).slice(0, 10);
        foundResults = foundResults.map(pokemon => {
            let Obj = pokemon;
            pokemon = {};
            pokemon.id = Obj.id;
            pokemon.title = Obj.title;
            pokemon.price = '$' + Obj.price.toString();
            pokemon.image = Obj.image;
            return pokemon;
        })
        this.setState({ results: foundResults, inputValue: event.target.value });
    }

    handleResultSelect(event, { result }) {
        this.setState({ inputValue: result.name });
        this.props.history.push(`/pokemon/${result.id}`);
    }
}


const mapStateToProps = (state) => {
    return {
        allPokemon: state.allPokemon
    }
}

export default withRouter(connect(mapStateToProps)(SearchBar));
