import { Box, InputAdornment, TextField, Typography, useTheme } from "@mui/material";

import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const EmployeeSearch = ({ searchTerm, handleSearchChange }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "98%",
        display: "flex",
        justifyContent: { xs: "start", sm: "space-between" },
        alignItems: "center",
        textAlign: "center",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 3, sm: 2 },
      }}
    >
      <Typography variant="h1" color="secondary">
        Funcionários
      </Typography>
      <TextField
        label="Pesquisar"
        placeholder="Insira chave de procura"
        value={searchTerm}
        variant="outlined"
        onChange={handleSearchChange}
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderRadius: 2,
          width: "100%",
          maxWidth: 350,
          color: theme.palette.primary.main,
          '& .MuiInputBase-input': {
            color: theme.palette.primary.main,
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment
              sx={{
                color: theme.palette.background.default,
                fontWeight: "bold",
              }}
              position="end"
            >
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default EmployeeSearch;