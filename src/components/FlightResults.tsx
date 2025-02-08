import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import FlightCard from "./FlightCard";
import { FlightResultsProps } from "../types";

const FlightResults: React.FC<FlightResultsProps> = ({ flights }) => {
  if (flights && flights.length === 0) {
    return (
      <Typography variant="h6" textAlign="center" sx={{ mt: 4 }}>
        No flights found.
      </Typography>
    );
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" textAlign="center" sx={{ mb: 2 }}>
        Flight Results
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {flights &&
          flights.map((flight, index) => (
            <Grid item key={index}>
              <FlightCard flight={flight} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default FlightResults;
