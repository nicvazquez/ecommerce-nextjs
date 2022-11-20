import { NextPage } from "next";
import { BeYourBest } from "../components/BeYourBest/BeYourBest";
import { LandingHome } from "../components/LandingHome/LandingHome";
import { Products } from "../components/Products/Products";
import { ProductInterface } from "../interfaces/Products";

interface Props {
	products: ProductInterface[];
	categories: string[];
}

const HomePage: NextPage<Props> = ({ products, categories }) => {
	return (
		<main>
			<LandingHome />

			<BeYourBest />

			<Products products={products} categories={categories} />
		</main>
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

export default HomePage;
