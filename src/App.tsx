import { useEffect } from "react";

import { getPokemons } from "./redux/middlewares/pokeMiddlewares";
import { useAppDispatch } from "./hooks/redux";

import PokemonList from "./components/Pokemon";
import { Search } from "./components/Search"
import { Title } from "./components/Title"

function App() {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getPokemons())
	}, [])

  return (
		<>
			<Title>Bem Vindo à PokeJest!</Title>

			<main className="main-index">
				<section>
					<Search />
				</section>

				<section aria-atomic="true" aria-live="polite">
					<PokemonList />
				</section>
			</main>
		</>
	)
}

export default App
