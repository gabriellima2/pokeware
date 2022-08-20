import { AppDispatch, AppThunk } from "../store"

import { pokeFetch } from "../../utils/pokeFetch"
import { setPokemons } from "../slices/pokeSlice"

export function getPokemons(): AppThunk {
	return async (dispatch: AppDispatch) => {
		const response = await pokeFetch("https://pokeapi.co/api/v2/pokemon?limit=15&offset=0")

		dispatch(setPokemons(response));
	}
}
