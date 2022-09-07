import { useEffect, useState } from "react";

import { getPokemons } from "./redux/middlewares/pokeMiddlewares";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { usePokeSelect } from "./redux/slices/pokeSlice";

import PokemonList from "./components/Pokemon";
import { Search } from "./components/Search"
import { Title } from "./components/Title"

import { InputChangeEvent, Pokemon } from "./types";

function App() {
	const [search, setSearch] = useState("")

	const dispatch = useAppDispatch()
	const { pokemons } = useAppSelector(usePokeSelect)

	useEffect(() => {
		dispatch(getPokemons())
	}, [])

	let searchResult: Pokemon[] = pokemons.filter((pokemon) => {
		if (!pokemon.name.includes(search.toLowerCase())) return

		return pokemon
	})

  return (
		<>
			<Title>Bem Vindo à PokeJest!</Title>

			<main className="main-index">
				<section>
					<Search
						value={search}
						handleChange={(e: InputChangeEvent) => setSearch(e.target.value)}
					/>
				</section>

				<section aria-atomic="true" aria-live="polite">
					{search && !searchResult.length
					? <h2 role="alert">Sem resultados!</h2>
					: <PokemonList
							pokemons={searchResult ? searchResult : pokemons}
						/>
					}
				</section>
			</main>
		</>
	)
}

export default App
