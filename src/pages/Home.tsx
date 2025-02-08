import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import FlightResults from "../components/FlightResults";
import { Flight } from "../types";
import SearchForm from "../features/search/SearchForm";

const Home: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([
    {
      from: "IST",
      to: "JFK",
      departureTime: "12:00",
      arrivalTime: "18:00",
      price: "$500",
      airline: "Turkish Airlines",
    },
    {
      from: "LAX",
      to: "LHR",
      departureTime: "14:00",
      arrivalTime: "08:00",
      price: "$450",
      airline: "British Airways",
    },
  ]);

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center">
        <SearchForm onSearch={() => {}} />
        <FlightResults flights={flights} />
      </Box>
    </Container>
  );
};

export default Home;
