import React, { Component } from 'react';
import { Card, Image, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

//seperate stateful and container components

export default class PokemonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // showModal: false
        }
    }

    render() {
        const { name, type1, total, hp, atk, gen, imgUrl, id } = this.props.pokemon;
        return (
            <Card id={id} className="pokemon-card">
                <Link to={`/allpokemon/${id}`}>
                    <Image src={imgUrl} centered />
                </Link>
                <Card.Content>
                    <Link to={`/allpokemon/${id}`}>
                        <Card.Header>
                            {name}
                        </Card.Header>
                    </Link>
                    <Card.Meta>
                        <span>
                            {`type: ${type1} hp: ${hp}, atk: ${atk}`}
                        </span>
                    </Card.Meta>
                    <Card.Description>
                        {`$${total}`}
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }

}

