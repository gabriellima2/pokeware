import { useState } from "react"

import "./style.css"

export function Search() {
	const [searchValue, setSearchValue] = useState("")

	return (
		<>
			<label>
			<input
				type="text"
				name="search"
				id="search"
				className="search-input"
				placeholder="Busque por Pokémons"
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
			/>
			</label>
		</>
	)
}
