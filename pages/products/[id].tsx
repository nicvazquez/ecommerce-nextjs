import { Product } from "../../components/Products/Product/Product";
import { ProductInterface } from "../../interfaces";

export default function ProductPage({
	product,
}: {
	product: ProductInterface;
}) {
	return (
		<div
			style={{
				height: "100vh",
				width: "100%",
				display: "grid",
				placeItems: "center",
				padding: "2rem",
			}}
		>
			<Product product={product} fullDescription />
		</div>
	);
}

export async function getStaticPaths() {
	const res = await fetch("https://fakestoreapi.com/products");
	const products = await res.json();

	const allProducts = [...Array(products.length)].map(
		(value, index) => `${index + 1}`
	);

	return {
		paths: allProducts.map((id) => ({
			params: { id },
		})),
		fallback: false, // can also be true or 'blocking'
	};
}

export async function getStaticProps({ params }: { params: ProductInterface }) {
	const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
	const product = await res.json();

	return {
		props: {
			product,
		},
	};
}
