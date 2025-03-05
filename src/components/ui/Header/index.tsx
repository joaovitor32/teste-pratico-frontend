'use client';

import { Box, Container, useTheme } from '@mui/material';

import React from 'react';

const Header = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        backgroundColor: theme.palette.background.paper,
        width: '100%',
        height: '86px',
        display: 'flex',
        alignItems: 'center',
        boxShadow: "0px 2px 8px 0px #00000033",
        borderBottom: `1px solid ${theme.palette.secondary.light}`,
        position: 'fixed',
        top: '0px',
        left: '0px',
        zIndex: 20
      }}
      maxWidth={false}
    >
      <Box
        sx={{
          width: 'inherit',
          height: 'inherit',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <img
          src="/Logo.png"
          width={122.4}
          height={47.6}
          alt="betalent-logo"
        />
      </Box>
    </Container>
  );
};

export default Header;
