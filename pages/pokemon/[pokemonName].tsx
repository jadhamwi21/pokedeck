import { useRouter } from "next/router";
import React from "react";

import { IPokemon } from "pokeapi-typescript";
import { PokeApiInstance } from "../api/pokeApi";
import { NextPageContext } from "next";
import styled from "styled-components";
import Button from "../../components/shared/Button";
import {
	AddToLocalStorage,
	CapitalizeFirstLetter,
} from "../../helper/functions";
import Head from "next/head";
const PokemonDetails = ({ Pokemon }: { Pokemon: IPokemon }) => {
	const history = useRouter();
	return (
		<>
			<Head>
				<title>
					Viewing Pokemon {CapitalizeFirstLetter(Pokemon.name)} Details
				</title>
			</Head>
			<Flexbox>
				<PokemonPicture src={Pokemon.sprites.front_default} />
				<PokemonDetailsFlexbox>
					<DetailItem>
						Name : <YellowWrapper>{Pokemon.name}</YellowWrapper>
					</DetailItem>
					<DetailItem>
						Height : <YellowWrapper>{Pokemon.height}</YellowWrapper>
					</DetailItem>
					<DetailItem>
						Weight : <YellowWrapper>{Pokemon.weight}</YellowWrapper>
					</DetailItem>
					<DetailItem>
						Types :{" "}
						{Pokemon.types.map((typeObject, index) => (
							<React.Fragment key={index}>
								<YellowWrapper>{typeObject.type.name}</YellowWrapper>
								{index !== Pokemon.types.length - 1 && " - "}
							</React.Fragment>
						))}
					</DetailItem>
					<Button
						onClick={() => {
							AddToLocalStorage(Pokemon);
							history.push("/");
						}}
					>
						Add To Collection
					</Button>
				</PokemonDetailsFlexbox>
			</Flexbox>
		</>
	);
};
const Flexbox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 45%;
	margin: 0 auto;
`;
const PokemonPicture = styled.img`
	height: 300px;
	width: 300px;
`;
const DetailItem = styled.div`
	margin: 1em 0px;
`;
const YellowWrapper = styled.span`
	color: var(--yellow);
`;
const PokemonDetailsFlexbox = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
`;
export const getServerSideProps = async (context: NextPageContext) => {
	const { pokemonName } = context.query;
	const Pokemon: IPokemon = await PokeApiInstance.getPokemonDetailsByName(
		pokemonName as string
	);
	if (!Pokemon) {
		return { notFound: true };
	}
	return { props: { Pokemon: Pokemon } };
};

export default PokemonDetails;
