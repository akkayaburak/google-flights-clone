export interface Airport {
  presentation: { title: string };
  skyId: string;
  entityId: string;
}

export interface AirportResponse {
  data: Airport[];
}

export interface FlightSearchParams {
  originSkyId: string;
  destinationSkyId: string;
  originEntityId: string;
  destinationEntityId: string;
  date: string; // YYYY-MM-DD format
}

export interface FlightResponse {
  data: {
    itineraries: Flight[];
  };
}

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
