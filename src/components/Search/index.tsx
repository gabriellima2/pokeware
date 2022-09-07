import { InputChangeEvent } from "../../types";

import "./style.css"

interface SearchProps {
	value: string;
	handleChange: (e: InputChangeEvent) => void
}

export function Search({ value, handleChange }: SearchProps) {
	return (
		<>
			<label>
			<input
				type="text"
				name="search"
				id="search"
				className="search-input"
				placeholder="Busque por Pokémons"
				value={value}
				onChange={handleChange}
			/>
			</label>
		</>
	)
}
