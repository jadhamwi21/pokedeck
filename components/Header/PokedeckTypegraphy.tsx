import React from "react";
import styled from "styled-components";

const PokedeckTypegraphy = () => {
	return <BoldTypegraphy>Pokedeck</BoldTypegraphy>;
};
const BoldTypegraphy = styled.h3`
	height: fit-content;
	width: fit-content;
	color: var(--yellow);
	margin: 0px;
	margin-left: 2em;
`;

export default PokedeckTypegraphy;
