import React from "react";
import { PaginationButton, ElipsisElement } from "./Pagination";
export const PaginationProcessor = (
	Content: number,
	CurrentPage: number,
	NumberOfPages: number,
	PaginationHandler: (
		Page: number | null,
		flag: "Previous" | "Next" | "Jump"
	) => void
) => {
	let Returned = null;
	if (Content === CurrentPage) {
		Returned = (
			<PaginationButton disabled={true}>{Content + 1}</PaginationButton>
		);
	} else if (
		Content === 0 ||
		Content === NumberOfPages ||
		Content === CurrentPage - 1 ||
		Content === CurrentPage + 1
	) {
		Returned = (
			<PaginationButton onClick={() => PaginationHandler(Content, "Jump")}>
				{Content + 1}
			</PaginationButton>
		);
	} else if (Content === CurrentPage - 2 || Content === CurrentPage + 2) {
		Returned = <ElipsisElement>...</ElipsisElement>;
	} else {
		Returned = <> </>;
	}
	return <React.Fragment>{Returned}</React.Fragment>;
};
