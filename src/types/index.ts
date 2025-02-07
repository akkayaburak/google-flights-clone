// General API parameters
export interface FlightSearchParams {
  origin: string;
  destination: string;
  date: string;
}

// General API response
export interface Flight {
  airline: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
}

export interface FlightResponse {
  flights: Flight[];
}
