"use client";
import React, { useState, useRef } from "react";
import { categories } from "@/const";
import { CategoryProps } from "@/types";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useUserSearchContext } from "@/context/userSearchContext";

const CategoryList: React.FC = () => {
	const { searchInput, setSearchInput } = useUserSearchContext();

	const [activeCategory, setActiveCategory] = useState<number | null>(1);
	const containerRef = useRef<HTMLDivElement | null>(null);

	const handleCategoryClick = (categoryId: number, categoryName: string) => {
		setActiveCategory(categoryId);
		setSearchInput(categoryName);
	};

	const scrollLeft = () => {
		if (containerRef.current) {
			containerRef.current.scrollLeft -= 100; // Adjust the scroll amount as needed
		}
	};

	const scrollRight = () => {
		if (containerRef.current) {
			containerRef.current.scrollLeft += 100; // Adjust the scroll amount as needed
		}
	};

	const handleScroll = () => {
		if (containerRef.current) {
			const container = containerRef.current;
			const showBackButton = container.scrollLeft > 0;
			setShowBackButton(showBackButton);
		}
	};

	const [showBackButton, setShowBackButton] = useState(false);

	return (
		<div className="py-12 w-full relative">
			<div className="flex items-center">
				<button
					onClick={scrollLeft}
					className={`absolute left-0 z-20 ${
						showBackButton ? "block" : "hidden"
					}`}
				>
					<BsChevronLeft size={20} />
				</button>
				<div
					ref={containerRef}
					className="flex space-x-4 md:space-x-8 overflow-x-scroll scrollbar-hide mx-12 whitespace-nowrap"
					onScroll={handleScroll}
				>
					{categories.map((category: CategoryProps) => (
						<div
							className={`text-sm py-3 px-6 border rounded-md cursor-pointer flex items-center justify-center space-x-4 transition-all ${
								activeCategory === category.id
									? "font-semibold border-blue-500 "
									: ""
							}`}
							key={category.id}
							onClick={() =>
								handleCategoryClick(category.id, category.name)
							}
						>
							<category.icon />
							<div>{category.name}</div>
						</div>
					))}
				</div>
				<button onClick={scrollRight} className="absolute right-0 z-20">
					<BsChevronRight size={20} />
				</button>
			</div>
		</div>
	);
};

export default CategoryList;
