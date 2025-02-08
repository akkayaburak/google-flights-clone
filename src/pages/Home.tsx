import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Flight } from "../types";
import SearchForm from "../features/search/SearchForm";
import FlightCard from "../components/FlightCard";

const Home: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);

  const handleSearch = (from: Date | null, to: Date | null) => {
    if (from && to) {
      const newFlights: Flight[] = [
        {
          id: "1",
          from: from.toLocaleDateString(),
          to: to.toLocaleDateString(),
          price: 100,
        },
        {
          id: "2",
          from: from.toLocaleDateString(),
          to: to.toLocaleDateString(),
          price: 200,
        },
        {
          id: "3",
          from: from.toLocaleDateString(),
          to: to.toLocaleDateString(),
          price: 300,
        },
      ];
      setFlights(newFlights);
    }
  };

  return (
    <Box sx={{ width: "100%", textAlign: "center", padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Search Flights
      </Typography>
      <SearchForm onSearch={handleSearch} />
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ marginTop: "2rem" }}
      >
        {flights.map((flight) => (
          <Grid item xs={12} sm={6} md={4} key={flight.id}>
            <FlightCard flight={flight} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
