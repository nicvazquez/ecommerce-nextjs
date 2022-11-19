import Image from "next/image";
import { FC } from "react";
import { Products } from "../../../interfaces";
import { LayoutProducts } from "../../Layouts/LayoutProducts";
import { Product } from "../Product/Product";

export const PopulaProducts: FC<Products> = ({ products }) => {
	const popularProducts = products.filter(
		(product) => product.rating.rate >= 4.5
	);

	return (
		<LayoutProducts title="Popular Products">
			{popularProducts.map((product) => (
				<Product key={product.id} product={product} />
			))}
		</LayoutProducts>
	);
};
