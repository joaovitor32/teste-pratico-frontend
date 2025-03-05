import React, { ReactNode } from "react";

import { CssBaseline } from "@mui/material";
import Header from "../../ui/Header";
import Providers from "../../../providers";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Providers>
      <CssBaseline />
      <Header />
      {children}
    </Providers>
  );
}

export default MainLayout;
