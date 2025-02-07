import React from "react";
import FlightCard from "./FlightCard";

// Varsayılan flight verileri
interface FlightData {
  id: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
}

interface FlightResultsProps {
  flights: FlightData[];
}

const FlightResults: React.FC<FlightResultsProps> = ({ flights }) => {
  return (
    <div className="flight-results">
      {flights.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </div>
  );
};

export default FlightResults;
