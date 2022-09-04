import React from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs"

import { useAppDispatch, useAppSelector } from "../../hooks/redux"

import { setPokemonFavorite, usePokeSelect } from "../../redux/slices/pokeSlice"
import { Pokemon } from "../../types"

import "./style.css"

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
		<button onClick={() => handleClick(props.pokemonID)} className="favorite-button">
			<i>{isFavorite ? <BsHeartFill style={{color: "#d63333"}} /> : <BsHeart />}</i>
		</button>
	)
}

function PokemonItem(props: PokemonItemProps) {
	return (
		<li className="poke-list--item">
			<h1 className="text-container--title">
				<span>#{props.id}</span>
				{props.name}
			</h1>
			<img
				src={props.sprites.front_default}
				alt={`Pokemon ${props.name}`}
				className="poke-list--item--image"
			/>
			<FavoriteButton pokemonID={props.id} isFavorite={props.isFavorite} />
		</li>
	)
}

export default React.memo(function PokemonList() {
	const { pokemons } = useAppSelector(usePokeSelect)

	return (
		<ul className="poke-list">
			{pokemons.map((pokemon) => (
				<PokemonItem {...pokemon} key={pokemon.id} />
			))}
		</ul>
	)
})

