import { useState } from "react";
import { ProductInterface } from "../../interfaces";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { LayoutProducts } from "../Layouts/LayoutProducts";
import { Product } from "./Product/Product";

import styles from "./products.module.css";

interface Props {
	categories: string[];
	products: ProductInterface[];
}
export const Products = ({ categories, products }: Props) => {
	const [categoryState, setCategoryState] = useState<string>("");
	const productsFiltered = products.filter((product) =>
		product.category.includes(categoryState)
	);
	return (
		<section className={styles.container}>
			<div className={styles.buttons}>
				<button
					className={categoryState === "" ? styles.selectedBtn : ""}
					onClick={() => setCategoryState("")}
				>
					All categories
				</button>
				{categories.map((category) => (
					<button
						className={category === categoryState ? styles.selectedBtn : ""}
						onClick={() => setCategoryState(category)}
						key={category}
					>
						{capitalizeFirstLetter(category)}
					</button>
				))}
			</div>

			<LayoutProducts title={`${capitalizeFirstLetter(categoryState)} Products`}>
				{productsFiltered.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</LayoutProducts>
		</section>
	);
};
