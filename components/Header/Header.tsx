import styles from "./header.module.css";
import { useEffect, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

export const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	const links = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "Products",
			link: "/products",
		},
		{
			name: "Promo",
			link: "/",
		},
		{
			name: "About",
			link: "/",
		},
	];

	return (
		<header className={styles.header}>
			<nav>
				<p>WearTheBest</p>

				<button onClick={() => setShowMenu(!showMenu)}>
					{showMenu ? (
						<FaTimes fill="var(--primary)" />
					) : (
						<HiMenuAlt2 fill="var(--primary)" />
					)}
				</button>
				{showMenu && (
					<div className={styles.links}>
						{links.map((link) => (
							<div key={link.name}>
								<Link href={link.link}>{link.name}</Link>
							</div>
						))}
					</div>
				)}
			</nav>
		</header>
	);
};
