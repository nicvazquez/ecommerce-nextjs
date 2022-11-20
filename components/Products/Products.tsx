import { useState } from "react";
import { ProductInterface } from "../../interfaces";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { LayoutProducts } from "../Layouts/LayoutProducts";
import { Categories } from "./Categories";
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

	const [productsAmount, setProductsAmount] = useState(4);

	const showMoreProducts = () => {
		if (productsAmount < productsFiltered.length) {
			setProductsAmount(productsAmount + 4);
		}
	};

	return (
		<section className={styles.container}>
			<Categories
				categoryState={categoryState}
				setCategoryState={setCategoryState}
				categories={categories}
			/>

			<LayoutProducts title={`${capitalizeFirstLetter(categoryState)} Products`}>
				{productsFiltered
					.map((product) => <Product key={product.id} product={product} />)
					.slice(0, productsAmount)}
			</LayoutProducts>

			{productsAmount < productsFiltered.length ? (
				<button
					onClick={showMoreProducts}
					className={`${styles.btnSeeMore} btn-secondary`}
				>
					Show more
				</button>
			) : (
				<button
					onClick={() => setProductsAmount(3)}
					className={`${styles.btnSeeMore} btn-secondary`}
				>
					Hide Products
				</button>
			)}
		</section>
	);
};
