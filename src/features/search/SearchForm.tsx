import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers";

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

          <Box display="flex" flexWrap="wrap" gap={2} width="100%">
            <DatePicker
              label="From"
              value={from}
              onChange={(newValue) => setFrom(newValue)}
              slotProps={{ textField: { fullWidth: true } }}
            />

            <DatePicker
              label="To"
              value={to}
              onChange={(newValue) => setTo(newValue)}
              slotProps={{ textField: { fullWidth: true } }}
            />
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
