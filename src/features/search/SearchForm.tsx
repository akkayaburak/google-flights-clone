import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  CircularProgress,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Autocomplete from "@mui/material/Autocomplete";
import { SearchFormProps } from "../../types";
import { Airport } from "./types";
import { searchAirport } from "../../api/airport";

const SearchForm: React.FC<SearchFormProps> = ({
  onSearch,
  setFromAirport,
  setToAirport,
}) => {
  const [from, setFrom] = useState<Date | null>(null);
  const [fromAirport, setFromAirportState] = useState<Airport | null>(null);
  const [toAirport, setToAirportState] = useState<Airport | null>(null);

  // Separate queries for both inputs
  const [fromQuery, setFromQuery] = useState(""); // From airport query
  const [toQuery, setToQuery] = useState(""); // To airport query

  // Separate loading states for both inputs
  const [fromLoading, setFromLoading] = useState(false);
  const [toLoading, setToLoading] = useState(false);

  // Airport options for both inputs
  const [fromAirportOptions, setFromAirportOptions] = useState<Airport[]>([]);
  const [toAirportOptions, setToAirportOptions] = useState<Airport[]>([]);

  // From airport search (debounced)
  useEffect(() => {
    if (fromQuery.length < 2) {
      setFromAirportOptions([]);
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      setFromLoading(true);
      try {
        const data: Airport[] = await searchAirport(fromQuery);
        setFromAirportOptions(data || []);
      } catch (error) {
        console.error("Airport fetch error:", error);
      }
      setFromLoading(false);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [fromQuery]);

  // To airport search (debounced)
  useEffect(() => {
    if (toQuery.length < 2) {
      setToAirportOptions([]);
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      setToLoading(true);
      try {
        const data: Airport[] = await searchAirport(toQuery);
        setToAirportOptions(data || []);
      } catch (error) {
        console.error("Airport fetch error:", error);
      }
      setToLoading(false);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [toQuery]);

  // Handle input change only (triggered when user types)
  const handleFromInputChange = (_: any, newValue: string) => {
    setFromQuery(newValue); // Update query only on input change
  };

  const handleToInputChange = (_: any, newValue: string) => {
    setToQuery(newValue); // Update query only on input change
  };

  // Handle selection change (triggered when user selects an airport)
  const handleFromChange = (_: any, newValue: Airport | null) => {
    if (newValue) {
      setFromAirportState(newValue);
      setFromAirport(newValue); // Set selected airport without triggering search
      setFromQuery(""); // Clear query when selection is made
    }
  };

  const handleToChange = (_: any, newValue: Airport | null) => {
    if (newValue) {
      setToAirportState(newValue);
      setToAirport(newValue); // Set selected airport without triggering search
      setToQuery(""); // Clear query when selection is made
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(from);
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={2}
          p={3}
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            width: "100%",
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            Find Your Flight
          </Typography>

          <Box display="flex" flexDirection="column" gap={2} width="100%">
            {/* From Airport Autocomplete */}
            <Autocomplete
              fullWidth
              options={fromAirportOptions}
              getOptionLabel={(option) => option.presentation.title}
              value={fromAirport}
              loading={fromLoading}
              onInputChange={handleFromInputChange} // Update query on input change
              onChange={handleFromChange} // Handle selection without triggering search
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="From Airport"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {fromLoading ? <CircularProgress size={20} /> : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                />
              )}
            />

            {/* To Airport Autocomplete */}
            <Autocomplete
              fullWidth
              options={toAirportOptions}
              getOptionLabel={(option) => option.presentation.title}
              value={toAirport}
              loading={toLoading}
              onInputChange={handleToInputChange} // Update query on input change
              onChange={handleToChange} // Handle selection without triggering search
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="To Airport"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {toLoading ? <CircularProgress size={20} /> : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                />
              )}
            />

            {/* Date Pickers */}
            <Box display="flex" flexWrap="wrap" width="100%">
              <DatePicker
                label="From"
                value={from}
                onChange={(newValue) => setFrom(newValue)}
                slotProps={{ textField: { fullWidth: true } }}
              />
            </Box>
          </Box>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              width: "100%",
              backgroundColor: "#1a73e8",
              "&:hover": { backgroundColor: "#1669c1" },
            }}
          >
            Search
          </Button>
        </Box>
      </form>
    </LocalizationProvider>
  );
};

export default SearchForm;
