import React from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import Link from "next/link";
import Searchbar from "./Searchbar";
import { MdOutlineMenu } from "react-icons/md";
import Image from "next/image";

const Header = () => {
	return (
		<nav className="w-full px-4 lg:px-12  py-6 bg-blue-500 text-gray-200 justify-between flex items-center shadow-sm">
			<section className="flex space-x-2 items-center">
				<Link href="/">
					<Image
						src={"/logo.png"}
						alt="logo"
						width={100}
						height={100}
						className="w-20 h-12"
					/>
				</Link>
			</section>
			<section className="w-3/5 lg:w-2/5">
				<Searchbar />
			</section>
			<section className="flex space-x-8">
				<Link href="/" className="hidden md:flex">
					Explore
				</Link>
				<MdOutlineMenu size={24} />
			</section>
		</nav>
	);
};

export default Header;
