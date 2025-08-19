import { useState } from 'react';
import { Box, Drawer, IconButton, List, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Camps',
    href: '/camps',
  },
  {
    name: 'Favorites',
    href: '/favorites',
  },
];

export default function SidebarMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = (state: boolean) => {
    console.log(state);
    setIsOpen(state);
  };

  return (
    <>
      <IconButton onClick={() => toggle(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer anchor={'right'} open={isOpen} onClose={() => toggle(false)}>
        <Box sx={{ width: 250 }} onClick={() => toggle(false)}>
          <List>
            {menuItems.map((item) => (
              <ListItemButton component={RouterLink} to={item.href}>
                {item.name}
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
