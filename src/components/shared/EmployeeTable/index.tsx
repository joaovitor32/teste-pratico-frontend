import { Avatar, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from "@mui/material";
import { fadeInCellVariant, fadeInRowVariant } from "../../../animations";

import { Employee } from "../../../type";
import React from "react";
import { formatDate } from "../../../utils/date";
import { formatPhoneNumber } from "../../../utils/phone";
import { motion } from "framer-motion";

interface EmployeeTableInterface {
  employees: Employee[] | undefined;
}

const EmployeeTable = ({ employees }: EmployeeTableInterface) => {
  const theme = useTheme();

  if (!employees || employees.length === 0) {
    return <Typography
      variant="h1"
      color={theme.palette.primary.main}
    >
      No employees data available
    </Typography>;
  }

  const renderEmployeeRow = (employee: Employee, index: number) => (
    <motion.tr
      key={employee.id}
      initial="hidden"
      animate="visible"
      variants={fadeInRowVariant}
      custom={index}
    >
      <TableCell sx={{ padding: theme.spacing(2) }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInCellVariant}
          custom={index}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <Avatar src={employee.image} alt={employee.name} />
        </motion.div>
      </TableCell>
      <TableCell sx={{ padding: theme.spacing(2) }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInCellVariant}
          custom={index + 0.1}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <Typography color="secondary" variant="h3">
            {employee.name}
          </Typography>
        </motion.div>
      </TableCell>
      <TableCell sx={{ padding: theme.spacing(2) }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInCellVariant}
          custom={index + 0.2}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <Typography color="secondary" variant="h3">
            {employee.job}
          </Typography>
        </motion.div>
      </TableCell>
      <TableCell sx={{ padding: theme.spacing(2) }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInCellVariant}
          custom={index + 0.3}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <Typography color="secondary" variant="h3">
            {formatDate(employee.admission_date)}
          </Typography>
        </motion.div>
      </TableCell>
      <TableCell sx={{ padding: theme.spacing(2) }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInCellVariant}
          custom={index + 0.4}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <Typography color="secondary" variant="h3">
            {formatPhoneNumber(employee.phone)}
          </Typography>
        </motion.div>
      </TableCell>
    </motion.tr>
  );

  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "98%",
        overflowX: "auto",
        borderRadius: 2,
      }}
    >
      <Table size="small">
        <TableHead
          sx={{
            background: theme.palette.primary.main,
            borderRadius: 2,
          }}
        >
          <TableRow>
            <TableCell sx={{ whiteSpace: "nowrap", padding: theme.spacing(2) }}>
              <Typography variant="h2">Foto</Typography>
            </TableCell>
            <TableCell sx={{ whiteSpace: "nowrap", padding: theme.spacing(2) }}>
              <Typography variant="h2">Nome</Typography>
            </TableCell>
            <TableCell sx={{ whiteSpace: "nowrap", padding: theme.spacing(2) }}>
              <Typography variant="h2">Cargo</Typography>
            </TableCell>
            <TableCell sx={{ whiteSpace: "nowrap", padding: theme.spacing(2) }}>
              <Typography variant="h2">Data de Admissão</Typography>
            </TableCell>
            <TableCell sx={{ whiteSpace: "nowrap", padding: theme.spacing(2) }}>
              <Typography variant="h2">Telefone</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee, index) => renderEmployeeRow(employee, index))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;

