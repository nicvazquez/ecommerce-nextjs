import Image from "next/image";
import Link from "next/link";
import { Product } from "../../components/Products/Product/Product";
import { ProductInterface } from "../../interfaces";
import styles from "./singleProduct.module.css";

interface Props {
	product: ProductInterface;
	relatedProducts: ProductInterface[];
}

export default function ProductPage({ product, relatedProducts }: Props) {
	relatedProducts.map((product) => {
		console.log(product.title);
	});
	return (
		<div className={styles.container}>
			<>
				<Product product={product} fullDescription />

				<div className={styles.relatedProductsContainer}>
					<h3>Related Products</h3>

					<div className={styles.relatedProducts}>
						{relatedProducts.map((prod) => (
							<div className={styles.relatedProducts__card} key={prod.id}>
								<Link href={`/products/${prod.id}`}>
									<Image src={prod.image} alt={`${prod.title} Image`} width={100} height={100} />
									<h4>{prod.title.slice(0, 60)}...</h4>
									<p>${prod.price}</p>
								</Link>
							</div>
						))}
					</div>
				</div>
			</>
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
	const resProduct = await fetch(
		`https://fakestoreapi.com/products/${params.id}`
	);
	const product = await resProduct.json();

	const resProducts = await fetch(`https://fakestoreapi.com/products/`);
	const products = await resProducts.json();

	const relatedProducts = products
		.filter(
			(prod: ProductInterface) =>
				prod.category === product.category && prod.id !== product.id
		)
		.slice(0, 5);

	return {
		props: {
			product,
			relatedProducts,
		},
	};
}
