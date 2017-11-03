import React from 'react';
import { Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


const Pokemon = (props) => {

    const { name, type1, price, hp, atk, imgUrl, id } = props.pokemon;
    return (
        <div id={id} className="pokemon-card">
            <div>
                <Link to={`/pokemon/${id}`}>
                    <Image src={image} centered />
                </Link>
            </div>
            <div>
                <Link to={`/pokemon/${id}`}>
                    <div>
                        {name}
                    </div>
                </Link>
                <div>
                    <span>
                        {`type: ${type1} hp: ${hp}, atk: ${atk}`}
                    </span>
                </div>
                <div>
                    {`$${price}`}
                </div>
            </div>
        </div>
    )

}

export default Pokemon

