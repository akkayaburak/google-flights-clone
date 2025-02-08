import { Airport } from "../features/search/types";

export interface FlightLeg {
  origin: {
    name: string;
  };
  destination: {
    name: string;
  };
}

// Uçuş tipi
export interface Flight {
  legs: FlightLeg[];
  departure: string;
  arrival: string;
  price: { formatted: string };
}

// types.ts veya SearchForm içinde
export interface SearchFormProps {
  onSearch: (from: Date | null) => Promise<void>;
  setFromAirport: (airport: Airport) => void; // setFromAirport fonksiyonu
  setToAirport: (airport: Airport) => void; // setToAirport fonksiyonu
}

export interface FlightResultsProps {
  flights: Flight[] | undefined;
}

export interface FlightCardProps {
  flight: Flight;
}
