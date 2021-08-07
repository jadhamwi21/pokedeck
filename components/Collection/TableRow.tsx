import { IPokemon } from "pokeapi-typescript";
import React, { useContext } from "react";
import styled from "styled-components";
import { CollectionContext } from "../../pages/mycollection";
import Button from "../shared/Button";

interface Props {
	Pokemon: IPokemon;
}

const TableRow = ({ Pokemon }: Props) => {
	const RemoveHandler = useContext(CollectionContext);
	return (
		<Row>
			<TableCell>{Pokemon.id}</TableCell>
			<TableCell>{Pokemon.name}</TableCell>
			<TableCell>{Pokemon.height}</TableCell>
			<TableCell>{Pokemon.weight}</TableCell>
			<TableCell>
				{Pokemon.types.map((typeObject, index) => (
					<React.Fragment key={index}>
						<YellowColorWrapper>{typeObject.type.name}</YellowColorWrapper>
						{index !== Pokemon.types.length - 1 && " - "}
					</React.Fragment>
				))}
			</TableCell>
			<TableCell>
				<Button
					onClick={() => {
						RemoveHandler(Pokemon.name);
					}}
				>
					Remove
				</Button>
			</TableCell>
		</Row>
	);
};
const Row = styled.tr`
	height: 90px;
	width: 100%;
`;
const YellowColorWrapper = styled.span`
	color: var(--yellow);
`;
const TableCell = styled.td`
	text-align: left;
	height: 100%;
	width: fit-content;
	padding: 1em 2em;
`;

export default TableRow;
