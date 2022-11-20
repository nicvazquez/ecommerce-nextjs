import React from "react";
import { Header } from "../Header/Header";

interface Props {
	children: JSX.Element | JSX.Element[];
}
export const LayoutPages = ({ children }: Props) => {
	return (
		<div>
			<Header />

			{children}
		</div>
	);
};
