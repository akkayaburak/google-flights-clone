// src/pages/Home.tsx
import React, { useState } from "react";
import FlightResults from "../components/FlightResults";
import SearchForm from "../features/search/SearchForm";
import { Flight } from "../types"; // Flight tipini import et
import { Container } from "@mui/material";

const Home: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);

  const handleSearch = (from: Date | null, to: Date | null) => {
    if (from && to) {
      const fetchedFlights: Flight[] = [
        { id: "1", from: "New York", to: "London", price: 500 },
        { id: "2", from: "Paris", to: "Berlin", price: 200 },
      ];
      setFlights(fetchedFlights);
    }
  };

  return (
    <Container>
      <SearchForm onSearch={handleSearch} />
      <FlightResults flights={flights} />
    </Container>
  );
};

export default Home;
