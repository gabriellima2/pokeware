import { AnyAction, configureStore, ThunkAction } from "@reduxjs/toolkit"
import { pokeReducer } from "./slices/pokeSlice"

export const store = configureStore({
	reducer: {
		poke: pokeReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		immutableCheck: false,
		serializableCheck: false
	})
})

export type AppThunk = ThunkAction<void, RootState, undefined, AnyAction>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
