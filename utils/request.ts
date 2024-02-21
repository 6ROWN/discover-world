export const photoBaseUrl =
	"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400";

export const fetchPlaces = async (query: string = "Hotels in Ghana") => {
	try {
		const response = await fetch(`/api/google-place-api?query=${query}`);

		if (!response.ok) {
			throw new Error("Failed to fetch places");
		}

		const result = await response.json();
		return result.results;
	} catch (error) {
		throw error;
	}
};
