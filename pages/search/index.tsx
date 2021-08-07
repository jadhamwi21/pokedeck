import React from "react";
import styled from "styled-components";
import SearchResultsList from "../../components/Search/SearchResultsList";
import { usePokemonSearch } from "../../hooks/usePokemonSearch";

const Search = () => {
	const { PokemonResult, Inputfield, onChangeHandler } = usePokemonSearch();
	return (
		<Container>
			<SearchfieldWrapper>
				<SearchField
					onChange={onChangeHandler}
					value={Inputfield}
					placeholder="Enter Pokemon Name"
				/>
				<SearchResultsList PokemonResult={PokemonResult} />
			</SearchfieldWrapper>
		</Container>
	);
};
const Container = styled.div`
	height: calc(100vh - 80px);
	width: 100%;
	display: grid;
	place-items: center;
`;
const SearchfieldWrapper = styled.div`
	height: 30px;
	width: 30%;
	margin: 0 auto;
	position: relative;
`;
const SearchField = styled.input`
	height: 100%;
	width: 100%;
	border: solid 1px var(--gray);
	border-radius: 4px;
	box-sizing: border-box;
	outline: none;
	padding: 4px 6px;
	color: var(--black);
`;

export default Search;
