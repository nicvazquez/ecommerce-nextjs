import { FC } from "react";
import styles from "./layoutProducts.module.css";

interface LayoutProps {
	children: JSX.Element | JSX.Element[];
	title: string;
}

export const LayoutProducts: FC<LayoutProps> = ({ children, title }) => {
	return (
		<section className={styles.section}>
			<h2>{title}</h2>

			<div className={styles.children}>{children}</div>
		</section>
	);
};
