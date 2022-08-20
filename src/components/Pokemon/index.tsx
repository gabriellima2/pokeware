import React from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs"

import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import { setPokemonFavorite, usePokeSelect } from "../../redux/slices/pokeSlice";
import { Pokemon } from "../../types";

interface FavoriteButtonProps {
	isFavorite: boolean;
	pokemonID: number;
}

interface PokemonItemProps extends Pokemon {}

function FavoriteButton({ isFavorite, ...props }: FavoriteButtonProps) {
	const dispatch = useAppDispatch()

	const handleClick = (id: typeof props.pokemonID) => {
		dispatch(setPokemonFavorite({id, isFavorite: !isFavorite}))
	}

	return (
		<button onClick={() => handleClick(props.pokemonID)}>
			<i>{isFavorite ? <BsHeartFill /> : <BsHeart />}</i>
		</button>
	)
}

export function PokemonItem(props: PokemonItemProps) {
	return (
		<div>
			<h1>
				<span>{props.id}</span>
				{props.name}
			</h1>
			<span>
				<FavoriteButton pokemonID={props.id} isFavorite={props.isFavorite} />
			</span>
			<img src={props.sprites.front_default} />
		</div>
	)
}

export default React.memo(function PokemonList() {
	const { pokemons } = useAppSelector(usePokeSelect)

	return (
		<>
			{pokemons.map((pokemon) => (
				<PokemonItem {...pokemon} key={pokemon.id} />
			))}
		</>
	)
})

