import Image from "next/image";
import { Product as ProductInterface } from "../../../interfaces";

export const Product = ({ product }: { product: ProductInterface }) => {
	return (
		<div key={product.id}>
			<Image
				src={product.image}
				alt={`${product.title} Product`}
				width={300}
				height={300}
			/>

			<p>{product.category}</p>
			<h3>{product.title}</h3>
			<p>{product.rating.rate}</p>
			<p>{product.description.split(".")[0]}.</p>

			<button>Add to cart ${product.price}</button>
		</div>
	);
};
