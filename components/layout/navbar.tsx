"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const pathname = usePathname();
	const links = [
		{ src: "/globe.svg", name: "", href: "/" },
		{ name: "CHARA", href: "/chara" },
		{ name: "NOTES", href: "/notes" },
		{ name: "STATS", href: "/stats" },
		{ name: "GUSET", href: "/guest" },
		{ name: "ABOUT", href: "/about" },
	];

	return (
		<nav className="flex flex-row px-2 max-sm:px-1 py-2 opacity-90">
			{links.map((link) => (
				<div key={link.name} className="relative">
					<Link
						href={link.href}
						className={clsx(
							"flex items-center hover:opacity-70 mx-3 max-sm:mx-2 max-xs:mx-1 transition duration-300 text-base max-sm:text-sm font-semibold ",
							pathname === link.href ? "text-mygo-color" : "text-white"
						)}
					>
						{link.src && (
							<div className="w-6 h-6 max-sm:w-5 max-sm:h-5 max-xs:w-4 max-xs:h-4">
								<Image
									src={link.src}
									alt="mygo"
									fill
									className="object-contain"
								/>
							</div>
						)}
						{link.name}
					</Link>
				</div>
			))}
		</nav>
	);
}
