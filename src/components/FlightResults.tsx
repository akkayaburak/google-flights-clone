import React from "react";
import { Box, Typography } from "@mui/material";
import FlightCard from "./FlightCard";
import { Flight } from "../types";

interface FlightResultsProps {
  flights: Flight[];
}

const FlightResults: React.FC<FlightResultsProps> = ({ flights }) => {
  return (
    <Box>
      {flights.length > 0 ? (
        flights.map((flight) => <FlightCard key={flight.id} flight={flight} />)
      ) : (
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          No flights found
        </Typography>
      )}
    </Box>
  );
};

export default FlightResults;
