import { IPokemon } from "pokeapi-typescript";
import React from "react";
import styled from "styled-components";
import PokemonItem from "./PokemonItem";

interface Props {
	Pokemons: IPokemon[];
}

const PokemonsFlexbox = ({ Pokemons }: Props) => {
	return (
		<Flexbox>
			{Pokemons.map((Pokemon) => (
				<PokemonItem Pokemon={Pokemon} key={Pokemon.id} />
			))}
		</Flexbox>
	);
};
const Flexbox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	box-sizing: border-box;
	padding: 1em 3em;
	margin: 0 auto;
`;

export default PokemonsFlexbox;
