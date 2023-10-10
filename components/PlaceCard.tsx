"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";
import { photoBaseUrl } from "@/utils/request";

const PlaceCard = ({ placeData }: any) => {
	const hasPhotos =
		placeData && placeData.photos && placeData.photos.length > 0;

	return (
		<Link href="" className="shadow-lg rounded-lg">
			<div>
				{hasPhotos ? ( // Check if there are photos
					<Image
						src={`${photoBaseUrl}&photo_reference=${placeData.photos[0].photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}`}
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
			<div className="p-2 flex flex-col space-y-2 flex-grow border rounded-b-lg">
				<h1 className="font-semibold">{placeData.name}</h1>
				<div className="flex space-x-2 items-center">
					<MdLocationOn size={16} className="text-gray-500" />
					<p className="text-sm text-gray-500">
						{placeData.formatted_address}
					</p>
				</div>
				<div className=" text-gray-500">
					<div className="flex space-x-3 items-center">
						<Image
							src="/stars-5.svg"
							alt="star logo"
							className="h-10 w-24"
							width={70}
							height={24}
							priority
						/>
						<p className="text-sm text-gray-500">
							Trustscore {placeData.rating}
						</p>
						<p>|</p>
						<p className="text-sm">
							{placeData.user_ratings_total} Reviews
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default PlaceCard;
