import axios from "axios";
import { FlightResponse, FlightSearchParams } from "../features/search/types";

const API_HOST = "sky-scrapper.p.rapidapi.com";
const API_KEY = process.env.REACT_APP_RAPIDAPI_KEY || "";

const apiClient = axios.create({
  baseURL: `https://${API_HOST}`,
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": API_HOST,
  },
});

// Gets the flights.
export const searchFlights = async (
  params: FlightSearchParams
): Promise<FlightResponse> => {
  try {
    const response = await apiClient.get<FlightResponse>(
      "/api/v2/flights/searchFlights",
      {
        params,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Flight search error:", error);
    throw error;
  }
};
