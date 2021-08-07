import { IPokemon } from "pokeapi-typescript";
import { useEffect, useState } from "react";
import { PokeApiInstance } from "../pages/api/pokeApi";

export const usePokemonSearch = () => {
	const [Inputfield, setInputField] = useState("");
	const [PokemonResult, setPokemonResult] = useState<null | IPokemon>(null);
	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputField(e.target.value);
	};
	useEffect(() => {
		if (Inputfield === "") return;
		const ClearTimeoutToken = setTimeout(async () => {
			const PokemonSearchResult = await PokeApiInstance.getPokemonDetailsByName(
				Inputfield.toLowerCase()
			);
			if (PokemonSearchResult !== null) {
				setPokemonResult(PokemonSearchResult);
			}
		}, 500);
		return () => {
			setPokemonResult(null);
			clearTimeout(ClearTimeoutToken);
		};
	}, [Inputfield]);
	return {
		Inputfield,
		onChangeHandler,
		PokemonResult,
	};
};
