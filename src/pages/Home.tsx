import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import FlightResults from "../components/FlightResults";
import { searchFlights } from "../api/flights";
import { Airport, FlightResponse } from "../features/search/types";
import SearchForm from "../features/search/SearchForm";

const Home: React.FC = () => {
  const [flights, setFlights] = useState<FlightResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [fromAirport, setFromAirport] = useState<Airport | null>(null);
  const [toAirport, setToAirport] = useState<Airport | null>(null);

  // **Flight search **
  const handleSearch = async (from: Date | null) => {
    if (!from || !fromAirport || !toAirport) return;

    setLoading(true);
    try {
      const departureDate = from.toISOString().split("T")[0]; // YYYY-MM-DD format

      const response = await searchFlights({
        originSkyId: fromAirport.skyId,
        destinationSkyId: toAirport.skyId,
        originEntityId: fromAirport.entityId,
        destinationEntityId: toAirport.entityId,
        date: departureDate,
      });

      setFlights(response);
    } catch (error) {
      console.error("Error fetching flights:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center">
        <SearchForm
          onSearch={handleSearch}
          setFromAirport={setFromAirport}
          setToAirport={setToAirport}
        />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <FlightResults flights={flights?.data.itineraries || []} />
        )}
      </Box>
    </Container>
  );
};

export default Home;
