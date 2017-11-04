import axios from 'axios'

const addPokemonToSession = singlePokemon => {
    // console.log('FUNCTION RUNNING CORRECTLY')
    axios.post(`/api/cart`, {singlePokemon})
        .catch(err => console.log(err))
}

module.exports = addPokemonToSession;
