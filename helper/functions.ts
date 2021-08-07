import { IPokemon } from "pokeapi-typescript";

export const AddToLocalStorage = (Pokemon: IPokemon) => {
	const doesExistInLocalStorage = localStorage.getItem(Pokemon.name);
	if (!doesExistInLocalStorage) {
		localStorage.setItem(Pokemon.name, JSON.stringify(Pokemon));
	}
};
export const GetLocalStorageItems = (): IPokemon[] => {
	const PokemonsKeys = Object.keys(localStorage);
	const NumberOfPokemons = localStorage.length;
	const PokemonsArry: IPokemon[] = [];
	for (let i = 0; i < NumberOfPokemons; i++) {
		const PokemonItem: IPokemon | any = JSON.parse(
			localStorage.getItem(PokemonsKeys[i])
		);

		PokemonsArry.push(PokemonItem);
	}
	return PokemonsArry;
};
export const RemovePokemonFromLocalStorage = (pokemonName: string) => {
	localStorage.removeItem(pokemonName);
};
export const CapitalizeFirstLetter = (str: string) => {
	return str
		.split(" ")
		.map((word) => word[0].toUpperCase() + word.substring(1))
		.join(" ");
};
