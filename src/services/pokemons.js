import { POKEMON_API } from "./pokemonApi";

export function getPokemons(nroPage) {
    return POKEMON_API.get(`pokemon?offset=${(nroPage-1)*20}&limit=20`)
}

export function getPokemon(id) {
    return POKEMON_API.get(`pokemon/${id}`)
}
export function getLocations() {
    return POKEMON_API.get('location')
}

export function getPokemonColor(id) {
    return POKEMON_API.get(`pokemon-species/${id}`)
}