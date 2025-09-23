import { Box, Typography } from '@mui/material';
import { useCampContext } from '@/modules/camp/providers/camp-context.ts';
import dayjs from 'dayjs';

export default function BaseInfo() {
  const { camp } = useCampContext();
  return (
    <Box>
      <Typography variant="body1">
        Город: <b>{camp ? camp.city : ''}</b>
      </Typography>
      <Typography variant="body1">
        Даты: <b>{camp ? dayjs(camp.startDate).format('DD.MM.YYYY') : ''}</b> -{' '}
        <b>{camp ? dayjs(camp.endDate).format('DD.MM.YYYY') : ''}</b>
      </Typography>
    </Box>
  );
}
