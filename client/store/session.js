import axios from 'axios'

export const addPokemonToSession = singlePokemon => {
	console.log('addPokemonToSession from session running')
    axios.post(`/api/cart`, {singlePokemon})
        .catch(err => console.log(err))
}
