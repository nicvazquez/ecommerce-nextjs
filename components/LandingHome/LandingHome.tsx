import styles from "./landingHome.module.css";

export const LandingHome = () => {
	return (
		<section className={styles.container}>
			<div className={styles.landingBackground}></div>
			<div className={styles.landingInfo}>
				<div>
					<h1>Wear the best.</h1>
					<p className="color-grey">
						Still, the second option holds promise could make the tagline shortlist if you
						are delivering relaxed.
					</p>
				</div>

				<div className={styles.landingInfo__buttons}>
					<button>Shop now</button>
					<button>See promo</button>
				</div>
			</div>
		</section>
	);
};
