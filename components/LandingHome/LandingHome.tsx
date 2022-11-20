import styles from "./landingHome.module.css";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

export const LandingHome = () => {
	return (
		<section className={styles.container}>
			<div className={styles.landingBackground}></div>
			<div className={styles.landingInfo}>
				<div className={styles.landingInfo__text}>
					<h1>Wear the best.</h1>
					<p className="color-grey">
						Still, the second option holds promise could make the tagline shortlist if you
						are delivering relaxed.
					</p>
				</div>

				<div className={styles.landingInfo__buttons}>
					<Link href={"/products"} target="_blank">
						<button className={styles.shopNowBtn}>
							Shop now
							<span>
								<FiExternalLink />
							</span>
						</button>
					</Link>
					<button>
						See promo
						<span>
							<FiExternalLink />
						</span>
					</button>
				</div>
			</div>
		</section>
	);
};
