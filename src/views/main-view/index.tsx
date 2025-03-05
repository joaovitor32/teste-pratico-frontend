import { Box, CircularProgress, Container, useTheme } from "@mui/material";
import React, { useMemo, useState } from "react";

import EmployeeSearch from "../../components/shared/EmployeeSearch";
import EmployeeTable from "../../components/shared/EmployeeTable";
import { useEmployees } from "../../mutations/useEmployeesReactQuery";

const MainView = () => {
  const { palette } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const { triggerGetEmployees: { data: employees = [], isLoading } } = useEmployees();

  const filteredEmployees = useMemo(
    () => employees.filter(({ name, job, phone }) =>
      [name, job, phone].some(field => field.toLowerCase().includes(searchTerm.toLowerCase()))
    ),
    [employees, searchTerm]
  );

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        my: 16,
        py: 4,
        px: 3,
        backgroundColor: palette.background.default,
      }}
      maxWidth={false}
    >
      <EmployeeSearch searchTerm={searchTerm} handleSearchChange={(e) => setSearchTerm(e.target.value)} />
      <EmployeeTable employees={filteredEmployees} />
    </Container>
  );
};

export default MainView;
