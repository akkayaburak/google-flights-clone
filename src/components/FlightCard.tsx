import React from "react";
import { Card, CardContent, Typography, Box, Divider } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import { FlightCardProps } from "../types";

const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  return (
    <Card sx={{ minWidth: 300, maxWidth: 400, m: 2, boxShadow: 3 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box textAlign="center">
            <FlightTakeoffIcon color="primary" />
            <Typography variant="body1">
              {flight.legs[0].origin.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {flight.legs[0].departure.slice(11, 16)}
            </Typography>
          </Box>

          <Typography variant="h5">→</Typography>

          <Box textAlign="center">
            <FlightLandIcon color="primary" />
            <Typography variant="body1">
              {flight.legs[0].destination.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {flight.legs[0].arrival.slice(11, 16)}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Typography
          textAlign={"center"}
          variant="h6"
          color="primary"
          sx={{ fontWeight: "bold" }}
        >
          {flight.price.formatted}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FlightCard;
