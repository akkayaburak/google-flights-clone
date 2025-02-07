import React from "react";
import FlightResults from "../components/FlightResults";

// Örnek uçuş verisi
const flights = [
  {
    id: "1",
    from: "New York",
    to: "Los Angeles",
    departureTime: "2025-03-15 07:00",
    arrivalTime: "2025-03-15 10:00",
    price: 250,
  },
  {
    id: "2",
    from: "London",
    to: "Paris",
    departureTime: "2025-03-16 09:00",
    arrivalTime: "2025-03-16 11:00",
    price: 150,
  },
];

const Home: React.FC = () => {
  return (
    <div>
      <h1>Google Flights Clone</h1>
      <FlightResults flights={flights} />
    </div>
  );
};

export default Home;
