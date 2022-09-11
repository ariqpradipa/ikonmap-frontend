import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Navbar() {
  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={4}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <a href="/">
              Peta iKon
            </a>
          </Typography>

          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="/peta"
              sx={{ my: 1, mx: 1.5 }}
            >
              Peta
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/tentang"
              sx={{ my: 1, mx: 1.5 }}
            >
              Tentang
            </Link>
          </nav>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Masuk
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}