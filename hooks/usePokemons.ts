import { IPokemon } from "pokeapi-typescript";
import React, { useEffect, useReducer, useRef } from "react";
import { PokeApiInstance } from "../pages/api/pokeApi";
import { PokemonsURLResponseInterface } from "../types/types";
interface StateInterface {
	CurrentPage: number;
	pokemonsURL: PokemonsURLResponseInterface;
	Loading: boolean;
	pokemonsList: IPokemon[];
}
enum ActionTypeKeys {
	NextPage,
	PreviousPage,
	JumpPage,
	StartLoading,
	StopLoading,
	StorePokemonsURL,
	StoreIndividualPokemon,
	ClearPokemonsList,
}
interface NextPage {
	type: ActionTypeKeys.NextPage;
}
interface PreviousPage {
	type: ActionTypeKeys.PreviousPage;
}
interface JumpPage {
	type: ActionTypeKeys.JumpPage;
	payload: {
		Page: number;
	};
}
interface ClearPokemonsList {
	type: ActionTypeKeys.ClearPokemonsList;
}
interface StartLoading {
	type: ActionTypeKeys.StartLoading;
}
interface StopLoading {
	type: ActionTypeKeys.StopLoading;
}
interface StorePokemonsURL {
	type: ActionTypeKeys.StorePokemonsURL;
	payload: {
		Pokemons: PokemonsURLResponseInterface;
	};
}
interface StoreIndividualPokemon {
	type: ActionTypeKeys.StoreIndividualPokemon;
	payload: {
		Pokemon: IPokemon;
	};
}
type ActionType =
	| ClearPokemonsList
	| StoreIndividualPokemon
	| NextPage
	| PreviousPage
	| StartLoading
	| StopLoading
	| JumpPage
	| StorePokemonsURL;
const Reducer = (state: StateInterface, action: ActionType) => {
	switch (action.type) {
		case ActionTypeKeys.NextPage:
			return { ...state, CurrentPage: state.CurrentPage + 1 };
		case ActionTypeKeys.PreviousPage:
			return { ...state, CurrentPage: state.CurrentPage - 1 };
		case ActionTypeKeys.JumpPage:
			return { ...state, CurrentPage: action.payload.Page };
		case ActionTypeKeys.StartLoading:
			return { ...state, Loading: true };
		case ActionTypeKeys.StopLoading:
			return { ...state, Loading: false };
		case ActionTypeKeys.StorePokemonsURL:
			return { ...state, pokemonsURL: action.payload.Pokemons };
		case ActionTypeKeys.ClearPokemonsList:
			return { ...state, pokemonsList: [] };
		case ActionTypeKeys.StoreIndividualPokemon:
			return {
				...state,
				pokemonsList: [...state.pokemonsList, action.payload.Pokemon],
			};
		default:
			return state;
	}
};
const usePokemons = (Pokemons: PokemonsURLResponseInterface) => {
	const [{ CurrentPage, pokemonsURL, Loading, pokemonsList }, dispatch] =
		useReducer(Reducer, {
			CurrentPage: 0,
			pokemonsURL: Pokemons,
			Loading: true,
			pokemonsList: [],
		});
	const NumberOfPages = Math.floor(Pokemons.count / 20);
	const PaginationClickHandler = (
		Page: number | null,
		flag: "Previous" | "Next" | "Jump"
	) => {
		dispatch({ type: ActionTypeKeys.StartLoading });
		dispatch({ type: ActionTypeKeys.ClearPokemonsList });
		switch (flag) {
			case "Next": {
				dispatch({ type: ActionTypeKeys.NextPage });
				break;
			}
			case "Previous": {
				dispatch({ type: ActionTypeKeys.PreviousPage });
				break;
			}
			case "Jump": {
				dispatch({ type: ActionTypeKeys.JumpPage, payload: { Page: Page } });
				break;
			}
		}
	};
	const isFirstMount = useRef(true);
	useEffect(() => {
		if (isFirstMount.current) {
			isFirstMount.current = false;
			return;
		}
		const GetNewPokemonsURLListFunction = async () => {
			const NewPokemonsList = await PokeApiInstance.getListOfPokemonsOnThisPage(
				CurrentPage
			);
			dispatch({
				type: ActionTypeKeys.StorePokemonsURL,
				payload: { Pokemons: NewPokemonsList },
			});
		};
		GetNewPokemonsURLListFunction();
	}, [CurrentPage]);
	useEffect(() => {
		if (Loading === true) {
			Promise.all(
				pokemonsURL.results.map(async (pokemonNameUrl) => {
					const pokemonDetails = await PokeApiInstance.getPokemonDetailsByURL(
						pokemonNameUrl.url
					);
					dispatch({
						type: ActionTypeKeys.StoreIndividualPokemon,
						payload: {
							Pokemon: pokemonDetails,
						},
					});
				})
			).then(() => {
				dispatch({
					type: ActionTypeKeys.StopLoading,
				});
			});
		}
	}, [pokemonsURL]);
	return {
		pokemonsURL,
		CurrentPage,
		NumberOfPages,
		Loading,
		PaginationClickHandler,
		pokemonsList,
	};
};

export default usePokemons;
