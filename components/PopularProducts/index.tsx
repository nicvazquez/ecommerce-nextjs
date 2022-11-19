import Image from "next/image";
import { FC } from "react";
import { Products } from "../../interfaces";

export const PopulaProducts: FC<Products> = ({ products }) => {
	const popularProducts = products.filter(
		(product) => product.rating.rate >= 4.5
	);

	console.log(popularProducts);
	return (
		<section>
			<h2>Popular Products</h2>

			{popularProducts.map(
				({ title, price, description, category, image, rating, id }) => (
					<div key={id}>
						<Image src={image} alt={`${title} Product`} width={300} height={300} />

						<p>{category}</p>
						<h3>{title}</h3>
						<p>{rating.rate}</p>
						<p>{description.split(".")[0]}.</p>

						<button>Add to cart ${price}</button>
					</div>
				)
			)}
		</section>
	);
};
