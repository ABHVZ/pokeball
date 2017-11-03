import axios from 'axios'

export const addPokemonToSession = singlePokemon => {
    axios.post(`/api/cart`, {singlePokemon})
        .catch(err => console.log(err))
}
