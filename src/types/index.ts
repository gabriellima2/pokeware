import { PokeResponse } from "../hooks/usePokeFetch"

export interface Pokemon extends Pick<PokeResponse, "name"> {
	id: number;
	sprites: {
		front_default: string;
	}
}
