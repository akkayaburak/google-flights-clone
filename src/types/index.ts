import { Airport } from "../features/search/types";

export interface FlightLeg {
  origin: {
    name: string;
  };
  destination: {
    name: string;
  };
}

export interface Flight {
  legs: FlightLeg[];
  departure: string;
  arrival: string;
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
