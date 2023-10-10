import React from "react";
import { photoBaseUrl } from "@/utils/request";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";

const SideDrawer = ({ place, close }: any) => {
	const hasPhotos = place && place.photos && place.photos.length > 0;
	const handleDirection = () => {
		window.open(
			`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}&q=${place.name}${place.formatted_address},{ mode: 'no-cors' }`
		);
	};

	return (
		<div className="fixed right-0 w-96 h-screen top-0 bg-blue-400 z-20">
			<button onClick={() => close()} className="relative p-4 group">
				<MdOutlineClose
					className="text-gray-200 border m-2 rounded group-hover:bg-red-300 transition-all"
					size={24}
				/>
			</button>

			<div className="relative p-8  flex flex-col space-y-6">
				<h1 className=" font-bold text-lg">{place.name}</h1>
				<div className="relative">
					{hasPhotos ? ( // Check if there are photos
						<Image
							src={`${photoBaseUrl}&photo_reference=${place.photos[0].photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}`}
							alt="place image"
							width={800}
							height={800}
							className="w-full h-[120px] rounded-t-lg object-cover shadow-lg"
							priority
						/>
					) : (
						// Display a default image if there are no photos
						<Image
							src="/placeholder.jpg"
							alt="Default Image of place"
							width={100}
							height={100}
							className="w-full h-[120px] rounded-t-lg object-cover shadow-lg"
							priority
						/>
					)}
				</div>
				<div className="flex space-x-2 items-center">
					<IoLocationSharp size={16} className="text-gray-700" />
					<p className="text-sm font-medium text-gray-700 ">
						{place.formatted_address}
					</p>
				</div>
				<div className=" text-gray-700">
					<div className="flex space-x-3 items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-4 h-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
							/>
						</svg>

						<p className="text-sm text-gray-700">
							{place.rating} Ratings
						</p>
						<p>|</p>
						<p className="text-sm flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-4 h-4 mr-2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
								/>
							</svg>
							{place.user_ratings_total} Reviews
						</p>
					</div>
				</div>
				<div className="flex text-gray-200 space-x-6 items-center justify-start">
					<button
						className="flex space-x-2 py-2 px-4 bg-red-300 rounded-full items-center"
						onClick={handleDirection}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
							/>
						</svg>
						<p>Direction</p>
					</button>
					<div className="flex space-x-2 py-2 px-4 bg-red-300 rounded-full items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-4 h-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
							/>
						</svg>

						<p>Share</p>
					</div>
				</div>
				<div className="">
					<iframe
						width="450"
						height="250"
						loading="eager"
						className="w-full h-[200px] rounded-md"
						src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}&q=${place.formatted_address}`}
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default SideDrawer;
