export interface FlightSearchParams {
  from: string;
  to: string;
  departureDate: string;
  returnDate?: string; // Opsiyonel
}

export interface Flight {
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: string;
  airline: string;
}

export interface FlightResponse {
  flights: Flight[];
  totalResults: number;
}
