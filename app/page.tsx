"use client";
import React, { useEffect, useState, useContext } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
// import { fetchPlaces } from "@/utils/request";
import PlaceList from "@/components/PlaceList";
import { useUserSearchContext } from "@/context/userSearchContext";
import Footer from "@/components/Footer";

const fetchPlaces = async (query: string = "Hotels in Italy") => {
	try {
		const response = await fetch(`/api/google-place-api?query=${query}`);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const result = await response.json();
		return result.results;
	} catch (error: any) {
		throw new Error("Error fetching data. Please try again later.", error);
	}
};

export default function Home() {
	const { searchInput } = useUserSearchContext();

	const [placeLists, setPlaceLists] = useState([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchPlaces(searchInput);
				setPlaceLists(data);
				setError(null);
			} catch (error: any) {
				console.error("Error fetching data:", error);
				setError(error.message);
			}
		};

		fetchData();
	}, [searchInput]);

	console.log(placeLists);

	return (
		<main className="overflow-hidden">
			<Header />
			<Hero />
			{error ? (
				<div className="h-[50vh] flex items-center justify-center">
					<h1 className="font-medium text-lg text-red-500 text-center">
						{error}
					</h1>
				</div>
			) : (
				placeLists && <PlaceList placeLists={placeLists} />
			)}
			<Footer />
		</main>
	);
}
