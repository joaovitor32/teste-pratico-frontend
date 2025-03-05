"use client"

import React from "react";
import { ReactQueryClientProvider } from "./reactQueryProvider";
import { ThemeProvider } from "@mui/material";
import theme from "../theme/theme";

export interface ProviderProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <ReactQueryClientProvider>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider >
    </ReactQueryClientProvider>
  );
};

export default Providers;
