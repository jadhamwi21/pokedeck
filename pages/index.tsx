import styled from "styled-components";
import Pagination from "../components/Home/Pagination";
import PokemonsFlexbox from "../components/Home/PokemonsFlexbox";
import usePokemons from "../hooks/usePokemons";
import { PokemonsURLResponseInterface } from "../types/types";
import Head from "next/head";
import { PokeApiInstance } from "./api/pokeApi";
export const getStaticProps = async () => {
	const PokemonsURL = await PokeApiInstance.getListOfAllPokemons();
	return {
		props: { PokemonsURL },
	};
};
export default function Home({
	PokemonsURL,
}: {
	PokemonsURL: PokemonsURLResponseInterface;
}) {
	const {
		pokemonsList,
		CurrentPage,
		Loading,
		pokemonsURL,
		NumberOfPages,
		PaginationClickHandler,
	} = usePokemons(PokemonsURL);
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<HomeContainer>
				<Pagination
					NumberOfPages={NumberOfPages}
					PaginationHandler={PaginationClickHandler}
					PokemonsURL={pokemonsURL}
					CurrentPage={CurrentPage}
				/>
				{Loading ? (
					<div>Loading...</div>
				) : (
					<PokemonsFlexbox Pokemons={pokemonsList} />
				)}
			</HomeContainer>
		</>
	);
}
const HomeContainer = styled.main`
	width: 100%;
	height: calc(100vh - 80px);
	overflow-y: scroll;
	padding: 10px 20px;
	box-sizing: border-box;
`;
