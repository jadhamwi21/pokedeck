import { IPokemon } from "pokeapi-typescript";

const EndpointExtensions = {
	Pokemon: "pokemon",
};
class PokeApi {
	Api_Endpoint = "https://pokeapi.co/api/v2";
	getListOfAllPokemons = async () => {
		const Response = await fetch(
			`${this.Api_Endpoint}/${EndpointExtensions.Pokemon}/?offset=0&limit=20`
		);
		const AllPokemons = await Response.json();
		return AllPokemons;
	};
	getListOfPokemonsOnThisPage = async (Page: number) => {
		const Response = await fetch(
			`${this.Api_Endpoint}/${EndpointExtensions.Pokemon}/?offset=${
				Page * 20
			}&limit=20`
		);
		const RequestedPagePokemons = await Response.json();
		return RequestedPagePokemons;
	};
	getPokemonDetailsByURL = async (pokemonURL: string): Promise<IPokemon> => {
		const Response = await fetch(pokemonURL);
		const PokemonDetails = await Response.json();
		return PokemonDetails;
	};
	getPokemonDetailsByName = async (
		pokemonName: string,
		controller?: AbortController
	): Promise<IPokemon> => {
		const Response = await fetch(`${this.Api_Endpoint}/pokemon/${pokemonName}`);
		if (!Response.ok) {
			return null;
		}
		const PokemonDetails = await Response.json();
		return PokemonDetails;
	};
}
export const PokeApiInstance = new PokeApi();
