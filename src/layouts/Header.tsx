import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#1a73e8" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Google Flights Clone
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
