import { Airport } from "../features/search/types";

export interface Flight {
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: string;
  airline: string;
}

// types.ts veya SearchForm içinde
export interface SearchFormProps {
  onSearch: (from: Date | null) => Promise<void>;
  setFromAirport: (airport: Airport) => void; // setFromAirport fonksiyonu
  setToAirport: (airport: Airport) => void; // setToAirport fonksiyonu
}

export interface FlightResultsProps {
  flights: Flight[] | null;
}

export interface FlightCardProps {
  flight: Flight;
}
