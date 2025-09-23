import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import BaseTile from '@/common/tile/BaseTile';
import PageTitle from '@/common/components/PageTitle';

export default function CampsPage() {
  return (
    <div style={{ padding: '20px' }}>
      <PageTitle title="Список доступных сборов" />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          '@media (min-width: 992px)': {
            justifyContent: 'flex-start',
          },
        }}
      >
        <Link to="/camps/1" style={{ textDecoration: 'none' }}>
          <BaseTile>
            <Typography variant="body2" color="primary.contrastText">
              Плитка лагеря (MUI)
            </Typography>
          </BaseTile>
        </Link>
      </Box>
    </div>
  );
}
