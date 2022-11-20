import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import styles from "./products.module.css";

interface Props {
	categoryState: string;
	setCategoryState: (arg0: string) => void;
	categories: string[];
}

export const Categories = ({
	categoryState,
	setCategoryState,
	categories,
}: Props) => {
	return (
		<div className={styles.buttonsCategories}>
			<button
				className={categoryState === "" ? styles.selectedBtn : ""}
				onClick={() => setCategoryState("")}
			>
				All categories
			</button>

			{categories.map((category) => (
				<button
					className={category === categoryState ? styles.selectedBtn : ""}
					onClick={() => setCategoryState(category)}
					key={category}
				>
					{capitalizeFirstLetter(category)}
				</button>
			))}
		</div>
	);
};
