import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { IPokemon } from "pokeapi-typescript";
import Button from "../shared/Button";
interface Props {
	Pokemon: IPokemon;
}

const PokemonItem = ({ Pokemon }: Props) => {
	const history = useRouter();
	return (
		<Card>
			<PokemonSpriteElement src={Pokemon.sprites.front_default} />
			<PokemonDetailElement>
				Name : <YellowColorWrapper>{Pokemon.name}</YellowColorWrapper>
			</PokemonDetailElement>
			<PokemonDetailElement>
				Height : <YellowColorWrapper>{Pokemon.height}</YellowColorWrapper>
			</PokemonDetailElement>
			<PokemonDetailElement>
				Weight : <YellowColorWrapper>{Pokemon.weight}</YellowColorWrapper>
			</PokemonDetailElement>
			<PokemonDetailElement>
				Types :{" "}
				{Pokemon.types.map((typeObject, index) => (
					<React.Fragment key={index}>
						<YellowColorWrapper>{typeObject.type.name}</YellowColorWrapper>
						{index !== Pokemon.types.length - 1 && " - "}
					</React.Fragment>
				))}
			</PokemonDetailElement>
			<Button onClick={() => history.push(`/pokemon/${Pokemon.name}`)}>
				Details
			</Button>
		</Card>
	);
};
const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10px 20px;
	box-sizing: border-box;
	background-color: var(--gray);
	margin: 1em 3em;
	height: fit-content;
	width: 275px;
	border-radius: 6px;
	& > * {
		margin: 0.75em 0em;
	}
`;
const PokemonSpriteElement = styled.img`
	height: 100px;
	width: 100px;
	object-fit: cover;
`;
const PokemonDetailElement = styled.div``;
const YellowColorWrapper = styled.span`
	color: var(--yellow);
`;

export default PokemonItem;
