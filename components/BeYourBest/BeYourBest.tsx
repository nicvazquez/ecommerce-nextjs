import styles from "./beYourBest.module.css";
export const BeYourBest = () => {
	return (
		<section className={styles.container}>
			<h2>Be Your Best</h2>
			<div className={styles.wrapper}>
				<div className={`${styles.card} ${styles.first}`}>
					<h4>Street Style</h4>
				</div>

				<div className={`${styles.card} ${styles.second}`}>
					<h4>Formal</h4>
				</div>
				<div className={`${styles.card} ${styles.third}`}>
					<h4>Casual</h4>
				</div>
			</div>
		</section>
	);
};
