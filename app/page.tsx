"use client";
import React, { useEffect, useState, useContext } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { fetchPlaces } from "@/utils/request";
import PlaceList from "@/components/PlaceList";
import { useUserSearchContext } from "@/context/userSearchContext";
import Skeleton from "@/components/Skeleton";
import Footer from "@/components/Footer";

export default function Home() {
	const { searchInput } = useUserSearchContext();

	const [placeLists, setPlaceLists] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchPlaces(searchInput);
				setPlaceLists(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, [searchInput]);

	return (
		<main className="overflow-hidden">
			<Header />
			<Hero />
			{placeLists ? <PlaceList placeLists={placeLists} /> : null}
			<Footer />
		</main>
	);
}
