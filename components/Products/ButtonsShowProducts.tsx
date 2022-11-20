import styles from "./products.module.css";
import { ProductInterface } from "../../interfaces/Products";

interface Props {
	showMoreProducts: () => void;
	productsAmount: number;
	productsToShow: number;
	setProductsAmount: (arg0: number) => void;
	productsFiltered: ProductInterface[];
}
export const ButtonsShowProducts = ({
	showMoreProducts,
	productsAmount,
	productsToShow,
	setProductsAmount,
	productsFiltered,
}: Props) => {
	return (
		<div className={styles.buttonsShowProducts}>
			{productsAmount < productsFiltered.length && (
				<button
					onClick={showMoreProducts}
					className={`${styles.btnSeeMore} btn-secondary`}
				>
					Show more
				</button>
			)}

			{productsAmount > productsToShow && (
				<button
					onClick={() => setProductsAmount(productsAmount - productsToShow)}
					className={`${styles.btnSeeMore} btn-primary`}
				>
					Show Less
				</button>
			)}
		</div>
	);
};
