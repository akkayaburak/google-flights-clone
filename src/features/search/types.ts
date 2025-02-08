// Havalimanı verisi için tip
export interface Airport {
  presentation: { title: string };
  skyId: string;
  entityId: string;
}

export interface AirportResponse {
  data: Airport[];
}

// Uçuş arama parametreleri için tip
export interface FlightSearchParams {
  originSkyId: string;
  destinationSkyId: string;
  originEntityId: string;
  destinationEntityId: string;
  date: string; // YYYY-MM-DD formatında
}

// Uçuş yanıtı tipi
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

// Uçuş tipi
export interface Flight {
  legs: FlightLeg[];
  departure: string;
  arrival: string;
  price: { formatted: string };
}
