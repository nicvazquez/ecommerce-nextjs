import { PopulaProducts } from "../components/PopularProducts";
import { Products } from "../interfaces/Products";

export default function Home({ products }: Products) {
	return (
		<main>
			<PopulaProducts products={products} />
		</main>
	);
}

export async function getStaticProps() {
	const res = await fetch("https://fakestoreapi.com/products");
	const products = await res.json();

	return {
		props: {
			products,
		},
	};
}
