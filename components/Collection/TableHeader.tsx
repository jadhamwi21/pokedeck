import React from "react";
import styled from "styled-components";

const TableHeader = () => {
	return (
		<Row>
			<TableHeaderCell>ID</TableHeaderCell>
			<TableHeaderCell>Name</TableHeaderCell>
			<TableHeaderCell>Height</TableHeaderCell>
			<TableHeaderCell>Weight</TableHeaderCell>
			<TableHeaderCell>Types</TableHeaderCell>
			<TableHeaderCell>Event</TableHeaderCell>
		</Row>
	);
};
const Row = styled.tr`
	height: 80px;
	width: 100%;
	border-bottom: solid 1px var(--gray);
`;
const TableHeaderCell = styled.th`
	color: var(--gray);
	text-align: left;
	height: 100%;
	width: fit-content;
	padding: 1em 2em;
`;

export default TableHeader;
