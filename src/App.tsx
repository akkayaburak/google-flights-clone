import React, { useState } from "react";
import { Container } from "@mui/material";
import SearchForm from "./features/search/SearchForm";
import FlightResults from "./components/FlightResults";
import { Flight } from "./types";

const App: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);

  const handleSearch = (from: Date | null, to: Date | null) => {
    // Burada gerçek API çağrısı yapılabilir. Şu an statik veri kullanılıyor.
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

export default App;
