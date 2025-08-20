import { Box, Typography } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ru';

import PageTitle from '@/shared/components/PageTitle.tsx';

type DayCalendarPropsType = {
  date: Dayjs;
  schedule: {
    date: Date;
    practiceType: string;
    auditorium: string;
  };
};

export default function DayCalendar(props: DayCalendarPropsType) {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <PageTitle title="Расписание" />
        <Typography variant="body1">{dayjs(props.date).format('dddd DD.MM')}</Typography>
      </Box>
    </Box>
  );
}
