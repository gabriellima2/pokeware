import { createSlice } from "@reduxjs/toolkit"

import { RootState } from "../store"
import { Pokemon } from "../../types"

interface InitialState {
	pokemons: Pokemon[];
}

const initialState: InitialState = {
	pokemons: [],
};

export const pokeSlice = createSlice({
	name: "pokemons",
	initialState,
	reducers: {
		setPokemons: (state, action) => {
			state.pokemons = action.payload;
		},
		setPokemonFavorite: () => {}
	},
})

export const usePokeSelect = (state: RootState) => state.poke
export const { setPokemons, setPokemonFavorite } = pokeSlice.actions
export const pokeReducer = pokeSlice.reducer
