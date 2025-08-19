import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div">
            CampToolkit
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Outlet />
      </Container>
    </>
  );
}
