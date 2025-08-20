import { Box, Tabs, Tab } from '@mui/material';
import PageTitle from '@/shared/components/PageTitle';
import { Link as RouterLink, Outlet, useLocation } from 'react-router-dom';

const tabs = [
  {
    name: 'Информация',
    path: 'details',
  },
  {
    name: 'Спортсмены',
    path: 'sportsmen',
  },
  {
    name: 'Группы',
    path: 'groups',
  },
];

export default function CampPage() {
  const location = useLocation();
  const defaultTabIndex = 0;

  const lastSegment = location.pathname.split('/').filter(Boolean).pop();
  const activeIndex = Math.max(
    defaultTabIndex,
    tabs.findIndex((t) => t.path === lastSegment),
  );

  return (
    <div>
      <PageTitle title="CampDetailsPage" showBackButton={true} />

      <Box sx={{ borderColor: 'divider', mb: 2 }}>
        <Tabs value={activeIndex} aria-label="camp tabs">
          {tabs.map((tab, index) => (
            <Tab
              key={tab.path}
              label={tab.name}
              component={RouterLink}
              to={tab.path}
              value={index}
              sx={{ textTransform: 'none', minHeight: 44, tb: 1 }}
            />
          ))}
        </Tabs>
      </Box>

      <Outlet />
    </div>
  );
}
