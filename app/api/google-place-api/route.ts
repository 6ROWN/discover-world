import { NextResponse } from "next/server";

const BASE_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json";
const GOOGLE_PLACE_API_KEY = process.env.GOOGLE_PLACE_API_KEY;

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const query = searchParams.get("query");

	const response = await fetch(
		`${BASE_URL}?query=${query}&key=${GOOGLE_PLACE_API_KEY}`
	);
	const result = await response.json();

	return NextResponse.json(result);
}
