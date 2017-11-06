import React from 'react';
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


const Pokemon = (props) => {

    const { name, type1, price, hp, atk, image, id } = props.pokemon;
    return (
        <Card id={id} className="pokemon-card">
            <Link to={`/pokemon/${id}`}>
                <Image src={image} centered />
            </Link>
            <Card.Content>
                <Link to={`/pokemon/${id}`}>
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
                    {`$${price}`}
                </Card.Description>
            </Card.Content>
        </Card>
    )

}

export default Pokemon

