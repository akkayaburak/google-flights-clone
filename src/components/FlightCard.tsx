import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Flight } from "../types";

interface FlightCardProps {
  flight: Flight;
}

const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  return (
    <Card sx={{ mb: 2, p: 2 }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {flight.from} to {flight.to}
        </Typography>
        <Typography variant="body1">Price: ${flight.price}</Typography>
      </CardContent>
    </Card>
  );
};

export default FlightCard;
