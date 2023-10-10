import React from "react";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="w-full bg-blue-500 py-6 mt-12">
			<div className="text-center text-sm text-gray-700">
				<Link href="/">
					&copy; 2023, Safari Spot. All Rights Reserved.
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
