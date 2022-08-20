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
			<Title>Bem vindo a PokeTest</Title>

			<main>
				<section>
					<Search />
				</section>

				<section>
					<PokemonList />
				</section>
			</main>
		</>
	)
}

export default App
