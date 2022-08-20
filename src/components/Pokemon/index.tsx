import React from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs"

import { useAppSelector } from "../../hooks/redux";

import { usePokeSelect } from "../../redux/slices/pokeSlice";
import { Pokemon } from "../../types";

interface FavoriteButtonProps {
	isFavorite: boolean;
}

interface PokemonItemProps extends Pokemon {}

function FavoriteButton({ isFavorite }: FavoriteButtonProps) {
	return (
		<button>
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
				<FavoriteButton isFavorite={false} />
			</span>
			<img src={props.sprites.front_default} />
		</div>
	)
}

export default React.memo(function PokemonList() {
	const {pokemons} = useAppSelector(usePokeSelect);

	return (
		<>
			{pokemons.map((pokemon) => (
				<PokemonItem {...pokemon} key={pokemon.id} />
			))}
		</>
	)
})

