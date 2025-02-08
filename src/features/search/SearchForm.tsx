import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

interface SearchFormProps {
  onSearch: (from: Date | null, to: Date | null) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [from, setFrom] = useState<Date | null>(null);
  const [to, setTo] = useState<Date | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(from, to);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={2}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ width: "100%", textAlign: "center" }}
          >
            Find Your Flight
          </Typography>

          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            gap={2}
          >
            <Box width="48%">
              <DesktopDatePicker
                label="From"
                value={from}
                onChange={(newValue) => setFrom(newValue)}
                // renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Box>

            <Box width="48%">
              <DesktopDatePicker
                label="To"
                value={to}
                onChange={(newValue) => setTo(newValue)}
                // renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Box>
          </Box>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
          >
            Search
          </Button>
        </Box>
      </form>
    </LocalizationProvider>
  );
};

export default SearchForm;
