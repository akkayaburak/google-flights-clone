import { useState } from "react";
import { FlightSearchParams } from "../../types";
import { TextField, Button, Box } from "@mui/material";

interface SearchFormProps {
  onSearch: (params: FlightSearchParams) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [origin, setOrigin] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ origin, destination, date });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", gap: 2 }}
    >
      <TextField
        label="From"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
        required
      />
      <TextField
        label="Where"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        required
      />
      <TextField
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <Button type="submit" variant="contained">
        Search
      </Button>
    </Box>
  );
};

export default SearchForm;
