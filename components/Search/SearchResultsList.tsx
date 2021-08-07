import { useRouter } from "next/router";
import { IPokemon } from "pokeapi-typescript";
import React from "react";
import styled from "styled-components";
import Button from "../shared/Button";

interface Props {
	PokemonResult: IPokemon | null;
}

const SearchResultsList = ({ PokemonResult }: Props) => {
	const history = useRouter();
	return (
		<Container shouldShowList={PokemonResult !== null}>
			{PokemonResult !== null && (
				<Row key={PokemonResult.id}>
					<PokemonPictureElement src={PokemonResult.sprites.front_default} />
					<PokemonNameElement>{PokemonResult.name}</PokemonNameElement>
					<Button
						onClick={() => history.push(`/pokemon/${PokemonResult.name}`)}
					>
						Details
					</Button>
				</Row>
			)}
		</Container>
	);
};
const Container = styled.div<{
	shouldShowList: boolean;
}>`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	height: ${(props) => (props.shouldShowList ? "fit-content" : "0px")};
`;
const Row = styled.div`
	height: 100px;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background-color: var(--gray);
	color: var(--yellow);
	padding: 0px 2em;
	box-sizing: border-box;
`;
const PokemonPictureElement = styled.img`
	height: 50px;
	width: 50px;
`;
const PokemonNameElement = styled.div``;

export default SearchResultsList;
