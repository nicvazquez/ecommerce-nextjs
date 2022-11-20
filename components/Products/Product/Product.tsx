import { ProductInterface } from "../../../interfaces";
import Image from "next/image";
import styles from "./product.module.css";
import Link from "next/link";

interface ProductProps {
	product: ProductInterface;
	fullDescription?: boolean;
}

export const Product = ({ product, fullDescription = false }: ProductProps) => {
	return (
		<div className={styles.container} key={product.id}>
			<Image
				src={product.image}
				alt={`${product.title} Product`}
				width={200}
				height={200}
			/>

			<div>
				<p className="color-grey">{product.category}</p>
				<div className={styles.titlePrice}>
					<h3>
						<Link href={`/products/${product.id}`}>{product.title}</Link>
					</h3>
					<p className={styles.price}>${product.price}</p>
				</div>

				<p className="color-grey">
					{fullDescription ? (
						product.description
					) : (
						<span>{product.description.slice(0, 150)}...</span>
					)}
				</p>

				<div className={styles.rating}>
					<p className="color-grey">
						<span>{product.rating.rate} ⭐</span> ({product.rating.count} reviews)
					</p>
				</div>

				<button className={`btn-primary ${styles.addToCarBtn}`}>Add to cart</button>
			</div>
		</div>
	);
};
