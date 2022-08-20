import { createSlice } from "@reduxjs/toolkit"

import { RootState } from "../store"
import { DefaultActionType, Pokemon } from "../../types"

interface InitialState {
	pokemons: Pokemon[];
}

export type SetPokemonsPayload = Omit<Pokemon, "isFavorite">[];
type SetPokemonFavoritePayload = Pick<Pokemon, "id" | "isFavorite">

const initialState: InitialState = {
	pokemons: [],
};

export const pokeSlice = createSlice({
	name: "pokemons",
	initialState,
	reducers: {
		setPokemons: (state, action: DefaultActionType<SetPokemonsPayload>) => {
			state.pokemons = action.payload.map((pokemon) => ({
				...pokemon,
				isFavorite: false
			}))
		},
		setPokemonFavorite: (state, action: DefaultActionType<SetPokemonFavoritePayload>) => {
			state.pokemons = state.pokemons.filter((pokemon) => {
				if (pokemon.id === action.payload.id) {
					pokemon.isFavorite = action.payload.isFavorite
				};

				return pokemon
			})
		}
	},
})

export const usePokeSelect = (state: RootState) => state.poke
export const { setPokemons, setPokemonFavorite } = pokeSlice.actions
export const pokeReducer = pokeSlice.reducer
