import { FlightSearchParams } from "../../types";

// Prop for search component
export interface SearchFormProps {
  onSearch: (params: FlightSearchParams) => void;
}
