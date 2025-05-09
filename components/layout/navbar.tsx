"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	const links = [
		{ src: "/globe.svg", name: "", href: "/" },
		{ name: "CHARA", href: "/chara" },
		{ name: "NOTES", href: "/notes" },
		{ name: "STATS", href: "/stats" },
		{ name: "GUEST", href: "/guest" },
		{ name: "ABOUT", href: "/about" },
	];

	const hamburgerVariants = {
		open: {
			rotate: 45,
			transition: { duration: 0.3 },
		},
		closed: {
			rotate: 0,
			transition: { duration: 0.3 },
		},
	};

	const crossVariants = {
		open: {
			rotate: -45,
			transition: { duration: 0.3 },
		},
		closed: {
			rotate: 0,
			transition: { duration: 0.3 },
		},
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<nav className="flex flex-row px-2 max-sm:px-1 py-2 opacity-90">
			<div className="hidden sm:flex items-center justify-center h-[3vh]">
				{links.map((link) => (
					<div key={link.name} className="relative">
						<Link
							href={link.href}
							className={clsx(
								"flex items-center hover:opacity-70 mx-3 transition duration-300 text-base font-semibold",
								link.href === "/"
									? pathname === link.href
										? "text-mygo-color"
										: "text-white"
									: pathname.startsWith(link.href)
									? "text-mygo-color"
									: "text-white"
							)}
						>
							{link.src && (
								<div className="w-6 h-6">
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
			</div>

			<AnimatePresence>
				<motion.div
					key="mobile-nav"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					className={clsx(
						"sm:hidden w-[70vw] bg-mygo-darker-color rounded-md origin-top overflow-hidden",
						isMenuOpen ? "" : "h-[3vh]"
					)}
					ref={menuRef}
				>
					<div className="flex items-center justify-between px-2 py-1 h-[3vh]">
						<Link href={links[0].href} className="flex items-center">
							<div className="w-6 h-6 relative">
								<Image
									src="/globe.svg"
									alt="mygo"
									fill
									className="object-contain"
								/>
							</div>
						</Link>
						<Link
							href={links[0].href}
							className="text-base font-medium text-white"
						>
							ANON SOYO
						</Link>
						<motion.div
							className="text-white text-2xl cursor-pointer"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							variants={isMenuOpen ? crossVariants : hamburgerVariants}
							animate={isMenuOpen ? "open" : "closed"}
						>
							{!isMenuOpen ? (
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M3 5H21C21.553 5 22 5.447 22 6C22 6.553 21.553 7 21 7H3C2.447 7 2 6.553 2 6C2 5.447 2.447 5 3 5ZM3 12H21C21.553 12 22 12.447 22 13C22 13.553 21.553 14 21 14H3C2.447 14 2 13.553 2 13C2 12.447 2.447 12 3 12ZM3 19H21C21.553 19 22 19.447 22 20C22 20.553 21.553 21 21 21H3C2.447 21 2 20.553 2 20C2 19.447 2.447 19 3 19Z"
										fill="white"
									/>
								</svg>
							) : (
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M11 4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4V11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H13V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H11V4Z"
										fill="white"
									/>
								</svg>
							)}
						</motion.div>
					</div>

					<AnimatePresence initial={false}>
						{isMenuOpen && (
							<motion.div
								key="open"
								initial={{ opacity: 0, height: 0 }}
								animate={{ opacity: 1, height: "auto" }}
								exit={{ opacity: 0, height: 0 }}
								transition={{ duration: 0.3 }}
								className="overflow-hidden mt-2"
							>
								<div className="divide-y divide-white/10">
									{links.slice(1).map((link, idx) => (
										<div
											key={link.name}
											className={clsx(
												"text-center py-2",
												idx === 0 && "border-t border-white/10"
											)}
										>
											<Link
												href={link.href}
												className={clsx(
													"text-base font-medium",
													link.href === "/"
														? pathname === link.href
															? "text-mygo-color"
															: "text-white"
														: pathname.startsWith(link.href)
														? "text-mygo-color"
														: "text-white"
												)}
												onClick={() => setIsMenuOpen(false)}
											>
												{link.name}
											</Link>
										</div>
									))}
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
			</AnimatePresence>
		</nav>
	);
}
