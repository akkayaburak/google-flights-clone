import axios from "axios";
import { Airport, AirportResponse } from "../features/search/types";

const API_HOST = "sky-scrapper.p.rapidapi.com";
const API_KEY = process.env.REACT_APP_RAPIDAPI_KEY || "";

const apiClient = axios.create({
  baseURL: `https://${API_HOST}`,
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": API_HOST,
  },
});

// Gets the airports.
export const searchAirport = async (query: string): Promise<Airport[]> => {
  try {
    const response = await apiClient.get<AirportResponse>(
      `/api/v1/flights/searchAirport?query=${query}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Airport search error:", error);
    throw error;
  }
};
