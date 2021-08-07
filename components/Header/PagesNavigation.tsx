import React from "react";
import styled from "styled-components";
import Link from "next/link";
import ReusableLink from "../shared/ReusableLink";
interface Props {}

const PagesNavigation = (props: Props) => {
	return (
		<NavContainer>
			<ReusableLink
				linkTo="/"
				linkValue="Home"
				WrapperComponent={NavListElement}
			/>
			<ReusableLink
				linkTo="/search"
				linkValue="Search"
				WrapperComponent={NavListElement}
			/>
			<ReusableLink
				linkTo="/mycollection"
				linkValue="Collection"
				WrapperComponent={NavListElement}
			/>
			<ReusableLink
				linkTo="/about"
				linkValue="About"
				WrapperComponent={NavListElement}
			/>
		</NavContainer>
	);
};
const NavContainer = styled.ul`
	& * {
		margin: 0px;
		padding: 0px;
	}
	list-style: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;
const NavListElement = styled.li`
	color: var(--gray);
	display: block;
	margin: 0px 1.5em;
	transition: all 0.25s ease;
	&:hover {
		cursor: pointer;
		color: var(--yellow);
	}
`;

export default PagesNavigation;
