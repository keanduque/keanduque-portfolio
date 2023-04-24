import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function SocialMedia() {
	return (
		<div className="app__social">
			<div>
				<a href="https://twitter.com/keanduque">
					<BsTwitter />
				</a>
			</div>
			<div>
				<a href="https://www.facebook.com/keanduque">
					<FaFacebookF />
				</a>
			</div>
			<div>
				<a href="https://www.instagram.com/keanmind27">
					<BsInstagram />
				</a>
			</div>
		</div>
	);
}

export default SocialMedia;
