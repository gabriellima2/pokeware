import { PokeResponse } from "../utils/pokeFetch";

export interface Pokemon extends Pick<PokeResponse, "name"> {
	id: number;
	sprites: {
		front_default: string;
	}
	isFavorite: boolean;
}

export interface DefaultActionType<T> {
	type: string;
	payload: T;
}
