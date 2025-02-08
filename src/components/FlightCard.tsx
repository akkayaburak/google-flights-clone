import React from "react";
import { Card, CardContent, Typography, Box, Divider } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import { FlightCardProps } from "../types";

const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  return (
    <Card sx={{ minWidth: 300, maxWidth: 400, m: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          {flight.airline}
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box textAlign="center">
            <FlightTakeoffIcon color="primary" />
            <Typography variant="body1">{flight.from}</Typography>
            <Typography variant="caption" color="text.secondary">
              {flight.departureTime}
            </Typography>
          </Box>

          <Typography variant="h5">→</Typography>

          <Box textAlign="center">
            <FlightLandIcon color="primary" />
            <Typography variant="body1">{flight.to}</Typography>
            <Typography variant="caption" color="text.secondary">
              {flight.arrivalTime}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>
          {flight.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FlightCard;
