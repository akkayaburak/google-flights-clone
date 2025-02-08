// General API parameters
export interface FlightSearchParams {
  origin: string;
  destination: string;
  date: string;
}

// General API response
export interface Flight {
  id: string;
  from: string;
  to: string;
  price: number;
}

export interface FlightResponse {
  flights: Flight[];
}
