import React from "react";
import styled from "styled-components";
import Head from "next/head";
interface Props {}

const About = (props: Props) => {
	return (
		<>
			<Head>
				<title>About Pokemon</title>
			</Head>
			<Wrapper>
				<Typography>
					The original Pokémon is a role-playing game based around building a
					small team of monsters to battle other monsters in a quest to become
					the best. Pokémon are divided into types, such as water and fire, each
					with different strengths. Battles between them can be likened to the
					simple hand game rock-paper-scissors.
				</Typography>
			</Wrapper>
		</>
	);
};
const Wrapper = styled.div`
	display: grid;
	place-items: center;
	height: calc(100vh - 80px);
	width: 100%;
`;
const Typography = styled.div`
	font-size: 30px;
	color: var(--gray);
`;

export default About;
