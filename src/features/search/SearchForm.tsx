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
  const [airportOptions, setAirportOptions] = useState<Airport[]>([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(""); // Kullanıcı girdisi için state

  // Kullanıcı 2+ harf yazınca API'yi çağır (debounce ile)
  useEffect(() => {
    if (query.length < 2) {
      setAirportOptions([]); // 2 harften kısa ise boş bırak
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      setLoading(true);
      try {
        const data: Airport[] = await searchAirport(query); // API çağrısı
        setAirportOptions(data || []);
      } catch (error) {
        console.error("Airport fetch error:", error);
      }
      setLoading(false);
    }, 500); // 500ms debounce süresi

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleAirportChange =
    (
      setter: React.Dispatch<React.SetStateAction<Airport | null>>,
      setAirport: any
    ) =>
    (_: any, newValue: Airport | null) => {
      setter(newValue);
      if (newValue) {
        setAirport(newValue);
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
              options={airportOptions}
              getOptionLabel={(option) => option.presentation.title}
              value={fromAirport}
              loading={loading}
              onInputChange={(_, newValue) => setQuery(newValue)}
              onChange={handleAirportChange(
                setFromAirportState,
                setFromAirport
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="From Airport"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {loading ? <CircularProgress size={20} /> : null}
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
              options={airportOptions}
              getOptionLabel={(option) => option.presentation.title}
              value={toAirport}
              loading={loading}
              onInputChange={(_, newValue) => setQuery(newValue)}
              onChange={handleAirportChange(setToAirportState, setToAirport)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="To Airport"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {loading ? <CircularProgress size={20} /> : null}
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
