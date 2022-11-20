import { BeYourBest } from "../components/BeYourBest/BeYourBest";
import { LandingHome } from "../components/LandingHome/LandingHome";
import { PopulaProducts } from "../components/Products";
import { Products } from "../interfaces/Products";

export default function Home({ products }: Products) {
	return (
		<main>
			<LandingHome />

			<BeYourBest />

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
