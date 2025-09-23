import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import BaseTile from '@/common/tile/BaseTile';
import PageTitle from '@/common/components/PageTitle';
import { useCampApi } from '@/common/api/camp/hooks/use-camp-api.hook.ts';
import dayjs from 'dayjs';

export default function CampsPage() {
  const { camps } = useCampApi();
  return (
    <Box sx={{ padding: '20px' }}>
      <PageTitle title="Список доступных сборов" />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: 3,
          '@media (min-width: 992px)': {
            justifyContent: 'flex-start',
          },
        }}
      >
        {camps &&
          camps.map((camp) => (
            <Link key={camp.id} to={`/camps/${camp.id}`} style={{ textDecoration: 'none' }}>
              <BaseTile>
                <Box>
                  <Typography variant="body2" color="primary.contrastText">
                    Город: <b>{camp ? camp.city : ''}</b>
                  </Typography>{' '}
                  <Typography variant="body2" color="primary.contrastText">
                    Даты: <b>{camp ? dayjs(camp.startDate).format('DD.MM.YYYY') : ''}</b> -{' '}
                    <b>{camp ? dayjs(camp.endDate).format('DD.MM.YYYY') : ''}</b>
                  </Typography>
                </Box>
              </BaseTile>
            </Link>
          ))}
      </Box>
    </Box>
  );
}
