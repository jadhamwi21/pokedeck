import React from "react";
import styled from "styled-components";
import PagesNavigation from "./PagesNavigation";
import PokedeckTypegraphy from "./PokedeckTypegraphy";

interface Props {}

const Header = (props: Props) => {
	return (
		<HeaderContainer>
			<PokedeckTypegraphy />
			<PagesNavigation />
		</HeaderContainer>
	);
};
const HeaderContainer = styled.header`
	width: 100%;
	height: 80px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background-color: var(--black);
`;

export default Header;
