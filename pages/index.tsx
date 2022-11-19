import { Product } from "../interfaces/Product";

export default function Home(products: Product[]) {
	console.log(products);
	return <h1>Hello world</h1>;
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
