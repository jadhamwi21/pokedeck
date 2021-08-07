import React from "react";
import Link from "next/link";
type RouteType = "" | "about" | "search" | "mycollection";
interface Props {
	linkTo: `/${RouteType}`;
	WrapperComponent: (props: any) => JSX.Element;
	linkValue: string;
}

const ReusableLink = ({ WrapperComponent, linkTo, linkValue }: Props) => {
	return (
		<Link href={linkTo}>
			<WrapperComponent>{linkValue}</WrapperComponent>
		</Link>
	);
};

export default ReusableLink;
