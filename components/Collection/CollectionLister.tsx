import { IPokemon } from "pokeapi-typescript";
import React from "react";
import styled from "styled-components";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

interface Props {
	PokemonsList: IPokemon[];
}

const CollectionLister = ({ PokemonsList }: Props) => {
	return (
		<Table>
			<TableHeader />
			{PokemonsList.map((Pokemon) => (
				<TableRow Pokemon={Pokemon} key={Pokemon.id} />
			))}
		</Table>
	);
};
const Table = styled.table`
	height: fit-content;
	width: 100%;
	margin: 0px;
	border-collapse: collapse;
`;

export default CollectionLister;
