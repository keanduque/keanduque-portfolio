import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

function Footer() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const { name, email, message } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		setLoading(true);

		const contact = {
			_type: "contact",
			name: name,
			email: email,
			message: message,
		};
		client.create(contact).then(() => {
			setLoading(false);
			setIsFormSubmitted(true);
		});
	};

	return (
		<>
			<h2 className="head-text-footer">Get in Touch</h2>
			<div className="app__footer-form app__flex">
				<p className="app__footer-contact">
					I'm currently looking for any opportunities, please contact
					me on my email or phone number below. or just leave a
					message on the contact form below. I'll try my best to get
					back to you!
				</p>
			</div>

			<div className="app__footer-cards">
				<div className="app__footer-card">
					<img src={images.email} alt="email" />
					<a href="mailto:kean_duque@yahoo.com" className="p-text">
						kean_duque@yahoo.com
					</a>
				</div>
				<div className="app__footer-card">
					<img src={images.mobile} alt="mobile" />
					<a href="tel:+39-347-680-1934" className="p-text">
						+39-347-680-1934
					</a>
				</div>
			</div>

			{!isFormSubmitted ? (
				<div className="app__footer-form app__flex">
					<div className="app__flex">
						<input
							type="text"
							className="p-text"
							placeholder="Your name"
							name="name"
							value={name}
							onChange={handleChangeInput}
						/>
					</div>
					<div className="app__flex">
						<input
							type="text"
							className="p-text"
							placeholder="Your email"
							name="email"
							value={email}
							onChange={handleChangeInput}
						/>
					</div>
					<div>
						<textarea
							className="p-text"
							placeholder="Your Message"
							value={message}
							name="message"
							onChange={handleChangeInput}
						/>
					</div>
					<button
						type="button"
						className="p-text"
						onClick={handleSubmit}>
						{loading ? "Sending" : "Send Message"}
					</button>
				</div>
			) : (
				<div>
					<h3 className="head-text">
						Thank you for Getting in touch!
					</h3>
				</div>
			)}
		</>
	);
}

export default AppWrap(
	MotionWrap(Footer, "app__footer"),
	"contact",
	"app__contactbg"
);
