import { IPokemon } from "pokeapi-typescript";
import { useEffect, useState } from "react";
import {
	GetLocalStorageItems,
	RemovePokemonFromLocalStorage,
} from "../helper/functions";

const useLocalStoragePokemons = () => {
	const [Pokemons, setPokemons] = useState<IPokemon[] | null>(null);
	useEffect(() => {
		const PokemonsInLocalStorage = GetLocalStorageItems();
		setPokemons(PokemonsInLocalStorage);
	}, []);
	const RemovePokemonHandler = (pokemonName: string) => {
		RemovePokemonFromLocalStorage(pokemonName);
		const ClonedPokemons = [...Pokemons];
		let PokemonIndex = null;
		ClonedPokemons.forEach((Pokemon, index) => {
			if (Pokemon.name === pokemonName) {
				PokemonIndex = index;
			}
		});
		ClonedPokemons.splice(PokemonIndex, 1);
		setPokemons(ClonedPokemons);
	};
	return { Pokemons, RemovePokemonHandler };
};

export default useLocalStoragePokemons;
