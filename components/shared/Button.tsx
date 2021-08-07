import React from "react";
import styled from "styled-components";

interface Props {
	children: string;
	onClick: (e: React.MouseEvent<Element, MouseEvent>) => void;
}

const Button = ({ children, onClick }: Props) => {
	return <ButtonElement onClick={onClick}>{children}</ButtonElement>;
};
export const ButtonElement = styled.button`
	border: solid 1px var(--yellow);
	border-radius: 4px;
	padding: 1em 1.25em;
	background-color: transparent;
	font-size: 14px;
	&:hover {
		transform: scale(1.05);
		cursor: pointer;
	}
`;
export default Button;
