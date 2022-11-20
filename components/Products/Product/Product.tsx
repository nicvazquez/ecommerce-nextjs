import { Rating } from "react-simple-star-rating";
import { Product as ProductInterface } from "../../../interfaces";
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
					{fullDescription ? product.description : product.description.split(".")[0]}.
				</p>

				<div className={styles.rating}>
					<Rating
						className={styles.rating__stars}
						initialValue={product.rating.rate}
						size={20}
						tooltipDefaultText={`${product.rating.count}`}
						readonly
						allowFraction
					/>
					<p className="color-grey">({product.rating.count} reviews)</p>
				</div>

				<button className={`btn-primary ${styles.addToCarBtn}`}>Add to cart</button>
			</div>
		</div>
	);
};
