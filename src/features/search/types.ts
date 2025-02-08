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
  flights: Flight[];
}

// Uçuş tipi
export interface Flight {
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: string;
  airline: string;
}
