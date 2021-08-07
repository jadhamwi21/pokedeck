import React from "react";

import styled from "styled-components";
import { PokemonsURLResponseInterface } from "../../types/types";
import { PaginationProcessor } from "./PaginationProcessor";
interface Props {
	NumberOfPages: number;
	PaginationHandler: (
		Page: number | null,
		flag: "Previous" | "Next" | "Jump"
	) => void;
	PokemonsURL: PokemonsURLResponseInterface;
	CurrentPage: number;
}

const Pagination = ({
	NumberOfPages,
	PaginationHandler,
	PokemonsURL,
	CurrentPage,
}: Props) => {
	const ButtonsContent = [];
	const PaginationButtonsContentGenerator = () => {
		for (let i = 0; i <= NumberOfPages; i++) {
			ButtonsContent.push(i);
		}
		return ButtonsContent;
	};
	return (
		<PaginationContainer>
			<Wrapper>
				<PaginationButton
					onClick={() => PaginationHandler(null, "Previous")}
					disabled={!PokemonsURL.previous}
				>
					Previous
				</PaginationButton>
				{PaginationButtonsContentGenerator().map((Content) => (
					<React.Fragment key={Content}>
						{PaginationProcessor(
							Content,
							CurrentPage,
							NumberOfPages,
							PaginationHandler
						)}
					</React.Fragment>
				))}
				<PaginationButton
					onClick={() => PaginationHandler(null, "Next")}
					disabled={!PokemonsURL.next}
				>
					Next
				</PaginationButton>
			</Wrapper>
		</PaginationContainer>
	);
};
const PaginationContainer = styled.div`
	width: 100%;
	height: fit-content;
	display: grid;
	place-items: center;
`;
const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;
export const PaginationButton = styled.button`
	border: initial;
	box-sizing: border-box;
	padding: 10px;
	background-color: var(--gray);
	color: var(--yellow);
	border-radius: 4px;
	margin: 0px 0.5em;
	&:first-child {
		margin: 0px 1.5em;
	}
	&:last-child {
		margin: 0px 1.5em;
	}
	&:active {
		filter: brightness(90%);
	}
	&:hover {
		cursor: pointer;
	}
	&:disabled {
		cursor: not-allowed;
		opacity: 0.7;
		color: black;
	}
`;
export const ElipsisElement = styled.div`
	color: var(--black);
`;

export default Pagination;
