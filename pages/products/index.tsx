import { NextPage } from "next";
import { LayoutPages } from "../../components/Layouts/LayoutPages";
import { Products } from "../../components/Products/Products";
import { ProductInterface } from "../../interfaces";

interface Props {
	products: ProductInterface[];
	categories: string[];
}

const ProductsPage: NextPage<Props> = ({ products, categories }) => {
	return (
		<LayoutPages>
			<div style={{ marginTop: "8rem" }}>
				<Products products={products} categories={categories} />
			</div>
		</LayoutPages>
	);
};

export async function getStaticProps() {
	const resProducts = await fetch("https://fakestoreapi.com/products");
	const products = await resProducts.json();

	const resCategories = await fetch(
		"https://fakestoreapi.com/products/categories"
	);
	const categories = await resCategories.json();

	return {
		props: {
			products,
			categories,
		},
	};
}

export default ProductsPage;
