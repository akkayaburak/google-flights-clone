import { Airport } from "../features/search/types";

export interface FlightLeg {
  departure: string;
  arrival: string;
  origin: {
    name: string;
  };
  destination: {
    name: string;
  };
}

export interface Flight {
  legs: FlightLeg[];
  price: { formatted: string };
}

export interface SearchFormProps {
  onSearch: (from: Date | null) => Promise<void>;
  setFromAirport: (airport: Airport) => void;
  setToAirport: (airport: Airport) => void;
}

export interface FlightResultsProps {
  flights: Flight[] | undefined;
}

export interface FlightCardProps {
  flight: Flight;
}
