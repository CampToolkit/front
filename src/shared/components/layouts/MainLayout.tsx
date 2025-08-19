import { AppBar, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import SidebarMenu from '@/shared/components/SidebarMenu.tsx';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function MainLayout() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CampToolkit
          </Typography>
          <SidebarMenu />
        </Toolbar>
      </AppBar>

      <Container maxWidth={'xl'} sx={{ mt: 10, px: 2 }}>
        <Outlet />
      </Container>
    </>
  );
}
