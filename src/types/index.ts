export interface Flight {
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: string;
  airline: string;
}

export interface SearchFormProps {
  onSearch: (from: Date | null, to: Date | null) => void;
}

export interface FlightResultsProps {
  flights: Flight[];
}

export interface FlightCardProps {
  flight: Flight;
}
