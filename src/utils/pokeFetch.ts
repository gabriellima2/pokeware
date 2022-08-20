import { SetPokemonsPayload } from "../redux/slices/pokeSlice";
import { Pokemon } from "../types";
import { getData } from "./getData";

export interface PokeResponse {
	name: string;
	url: string
}

interface Response {
	results: PokeResponse[]
}

export async function pokeFetch(url: string) {
	const response = await getData<Response>(url)

	if (!response?.results) return []

	const pokemonPromises = response.results.map((pokemon) => (
		getData<Pokemon | undefined>(pokemon.url)
	))
	const pokemons = await Promise.all(pokemonPromises)

	if (pokemons.length < 0) return []

	return pokemons
}
