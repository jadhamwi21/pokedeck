import React from "react";
import styled from "styled-components";
import CollectionLister from "../../components/Collection/CollectionLister";
import useLocalStoragePokemons from "../../hooks/useLocalStoragePokemons";
import Head from "next/head";
export const CollectionContext = React.createContext(null);
const Collection = () => {
	const { Pokemons, RemovePokemonHandler } = useLocalStoragePokemons();
	return (
		<>
			<Head>
				<title>My Collection</title>
			</Head>
			<CollectionContext.Provider value={RemovePokemonHandler}>
				<Layout>
					<CollectionHeader>My Collection</CollectionHeader>
					{Pokemons !== null && Pokemons.length !== 0 && (
						<CollectionLister PokemonsList={Pokemons} />
					)}
					{Pokemons !== null && Pokemons.length === 0 ? (
						<div>No Pokemons In Your Collection</div>
					) : null}
				</Layout>
			</CollectionContext.Provider>
		</>
	);
};
const Layout = styled.div`
	height: calc(100vh - 80px);
	width: 100%;
	overflow-y: scroll;
`;
const CollectionHeader = styled.h3`
	display: block;
	margin: 2em auto;
	color: var(--gray);
	height: fit-content;
	width: fit-content;
`;

export default Collection;
