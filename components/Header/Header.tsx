import styles from "./header.module.css";
import { useEffect, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
	const pathname = useRouter().pathname;
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
			link: "/promo",
		},
		{
			name: "About",
			link: "/about",
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
								<Link
									style={pathname === link.link ? { fontWeight: "700" } : {}}
									href={link.link}
								>
									{link.name}
								</Link>
							</div>
						))}
					</div>
				)}
			</nav>
		</header>
	);
};
