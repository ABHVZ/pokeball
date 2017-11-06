import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const separateByNum = 3;
const separateSimilarPokemon = (similarPokemon) => {
    let output = [];
    similarPokemon.forEach((pokemon, idx) => {
        if (idx % separateByNum === 0) {
            output.push([]);
        }
        output[output.length - 1].push(pokemon);
    })
    return output;
}


class SimilarPokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };
    }

    render() {

        const { similarPokemon } = this.props;

        return (
            <div className="you-may-like-container">
                <div className="you-may-like-head">
                    <div className="ui header">
                        You May Also Like
                    </div>
                </div>
                <div className="carousel">
                    <a
                        href="#"
                        className="carousel__arrow carousel__arrow--left"
                        onClick={e => this.goToPrevSlide(e)}
                    >
                        <span className="fa fa-2x fa-angle-left" />
                    </a>

                    <ul className="carousel__slides">
                        {similarPokemon && separateSimilarPokemon(similarPokemon).map((pokemon, index) =>
                            (<li
                                className={
                                    (index === this.state.activeIndex)
                                        ? 'carousel__slide carousel__slide--active'
                                        : 'carousel__slide'
                                }
                                key={index}
                            >
                                <div className="carousel-slide__content">
                                    <div>
                                        <img src={pokemon[0].image} />
                                        <p>
                                            <small className="carousel-slide__info">
                                                {pokemon[0].name}
                                            </small>,
                                        {' '}<small className="carousel-slide__info">
                                                {pokemon[0].type1}
                                            </small>,
                                        {' '}<small className="carousel-slide__info">
                                                {`$${pokemon[0].price}`}
                                            </small>
                                        </p>
                                    </div>
                                    <div>
                                        <img src={pokemon[1].image} />
                                        <p>
                                            <small className="carousel-slide__info">
                                                {pokemon[1].name}
                                            </small>,{' '}<small className="carousel-slide__info">
                                                {pokemon[1].type1}
                                            </small>,
                                        {' '}<small className="carousel-slide__info">
                                                {`$${pokemon[1].price}`}
                                            </small>
                                        </p>
                                    </div>
                                    <div>
                                        <img src={pokemon[2].image} />
                                        <p>
                                            <small className="carousel-slide__info">
                                                {pokemon[2].name}
                                            </small>,
                                        {' '}<small className="carousel-slide__info">
                                                {pokemon[2].type1}
                                            </small>,
                                        {' '}<small className="carousel-slide__info">
                                                {`$${pokemon[2].price}`}
                                            </small>
                                        </p>
                                    </div>

                                </div>
                            </li>)
                        )}
                    </ul>

                    <a
                        href="#"
                        className="carousel__arrow carousel__arrow--right"
                        onClick={e => this.goToNextSlide(e)}
                    >
                        <span className="fa fa-2x fa-angle-right" />
                    </a>

                    <ul className="carousel__indicators">
                        {similarPokemon && separateSimilarPokemon(similarPokemon).map((pokemon, index) =>
                            (<li key={index}>
                                <a
                                    className={
                                        index == this.state.activeIndex
                                            ? 'carousel__indicator carousel__indicator--active'
                                            : 'carousel__indicator'
                                    }
                                    onClick={e => this.goToSlide(index)}
                                />
                            </li>)
                        )}
                    </ul>
                </div>
            </div>
        );
    }

    goToSlide(index) {
        this.setState({ activeIndex: index });
    }

    goToPrevSlide(e) {
        e.preventDefault();

        let index = this.state.activeIndex;
        let { slides } = this.props;
        let slidesLength = slides.length;

        if (index < 1) {
            index = slidesLength;
        }

        --index;

        this.setState({
            activeIndex: index
        });
    }

    goToNextSlide(e) {
        e.preventDefault();

        let index = this.state.activeIndex;
        let { slides } = this.props;
        let slidesLength = slides.length - 1;

        if (index === slidesLength) {
            index = -1;
        }

        ++index;

        this.setState({
            activeIndex: index
        });
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        similarPokemon: ownProps.currentPokemon && state.allPokemon &&
        state.allPokemon.filter(pokemon => pokemon.price > ownProps.currentPokemon.price - 10 && pokemon.price < ownProps.currentPokemon.price + 10).slice(0, 9)
    }
}

export default withRouter(connect(mapStateToProps)(SimilarPokemon));
