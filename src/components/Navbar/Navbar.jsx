import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { images } from "../../constants";

function Navbar() {
	const [toggle, setToggle] = useState(false);
	const navigations = ["home", "about-me", "work", "skills", "contact"];

	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<img src={images.logo} alt="logo" />
			</div>
			<ul className="app__navbar-links">
				{navigations.map((nav) => (
					<li className="app__flex p-text" key={`link-${nav}`}>
						<div />
						<a href={`#${nav}`}>{nav}</a>
					</li>
				))}
			</ul>

			<div className="app__navbar-menu">
				<HiMenuAlt4 onClick={() => setToggle(true)} />

				{toggle && (
					<motion.div
						whileInView={{ opacity: [0.9, 1] }}
						transition={{
							duration: 0.85,
							ease: "easeOut",
						}}
						style={{ opacity: 0 }}>
						<HiX onClick={() => setToggle(false)} />
						<ul>
							{navigations.map((nav) => (
								<li key={nav}>
									<a
										href={`#${nav}`}
										onClick={() => setToggle(false)}>
										{nav}
									</a>
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
