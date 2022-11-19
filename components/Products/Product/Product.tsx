import { Rating } from "react-simple-star-rating";
import { Product as ProductInterface } from "../../../interfaces";
import Image from "next/image";
import styles from "./product.module.css";

export const Product = ({ product }: { product: ProductInterface }) => {
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
					<h3>{product.title}</h3>
					<p className={styles.price}>${product.price}</p>
				</div>

				<p className="color-grey">{product.description.split(".")[0]}.</p>
				<Rating
					style={{ marginTop: "1rem" }}
					initialValue={product.rating.rate}
					size={20}
					readonly
					allowFraction
				/>

				<button className={styles.addToCarBtn}>Add to cart</button>
			</div>
		</div>
	);
};
