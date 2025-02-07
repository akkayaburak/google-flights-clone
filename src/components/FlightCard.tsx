import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

// Uçuş verilerini almak için FlightCardProps tipini tanımlıyoruz
interface FlightCardProps {
  flight: {
    from: string;
    to: string;
    departureTime: string;
    arrivalTime: string;
    price: number;
  };
}

const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h6">
          {flight.from} → {flight.to}
        </Typography>
        <Typography color="textSecondary">
          Departure: {flight.departureTime}
        </Typography>
        <Typography color="textSecondary">
          Arrival: {flight.arrivalTime}
        </Typography>
        <Typography variant="body1">Price: ${flight.price}</Typography>
      </CardContent>
    </Card>
  );
};

export default FlightCard;
