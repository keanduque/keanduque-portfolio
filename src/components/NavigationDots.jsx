import React from "react";

function NavigationDots({ active }) {
	return (
		<div className="app__navigation">
			{[
				"home",
				"about-me",
				"work",
				"skills",
				"testimonials",
				"contact",
			].map((nav, index) => (
				<a
					href={`#${nav}`}
					key={nav + index}
					className="app__navigation-dot"
					style={active === nav ? { backgroundColor: "#f45808" } : {}}
				/>
			))}
		</div>
	);
}

export default NavigationDots;
