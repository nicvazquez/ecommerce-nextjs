import { useState } from "react";
import { ProductInterface } from "../../interfaces";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { LayoutProducts } from "../Layouts/LayoutProducts";
import { ButtonsShowProducts } from "./ButtonsShowProducts";
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

	const productsToShow = 4;

	const [productsAmount, setProductsAmount] = useState(productsToShow);

	const showMoreProducts = () => {
		if (productsAmount < productsFiltered.length) {
			setProductsAmount(productsAmount + productsToShow);
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

			<ButtonsShowProducts
				showMoreProducts={showMoreProducts}
				productsAmount={productsAmount}
				productsToShow={productsToShow}
				setProductsAmount={setProductsAmount}
				productsFiltered={productsFiltered}
			/>
		</section>
	);
};
