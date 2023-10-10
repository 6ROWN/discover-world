"use client";
import React, { useState } from "react";
import PlaceCard from "./PlaceCard";
import SideDrawer from "./SideDrawer";
import { useUserSearchContext } from "@/context/userSearchContext";
import Skeleton from "./Skeleton";

const PlaceList = ({ placeLists }: any) => {
	const [selectedPlace, setSelectedPlace] = useState<any>([]);
	const { searchInput } = useUserSearchContext();

	const generateSkeletonArray = (count: number) => {
		return Array.from({ length: count }, (_, index) => (
			<Skeleton key={index} />
		));
	};

	return (
		<div className="w-full">
			<div className="w-11/12 mx-auto">
				<h1 className="pb-4 text-lg font-bold">
					Searching results for {searchInput}
				</h1>
				<div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8">
					{placeLists?.map((placeData: any, index: number) => (
						<div
							onClick={() => setSelectedPlace(placeData)}
							key={index}
						>
							<PlaceCard placeData={placeData} />
						</div>
					))}
				</div>
				<div>
					{placeLists?.length == 0 && (
						<div className="mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8">
							{generateSkeletonArray(10)}
						</div>
					)}
				</div>
				<div>
					{selectedPlace?.name ? (
						<SideDrawer
							place={selectedPlace}
							close={() => setSelectedPlace([])}
						/>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default PlaceList;
