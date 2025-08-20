import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ru';

import { Box, Typography } from '@mui/material';

import { useWeekDays } from '@/shared/components/calendar/use-week-days.hook.ts';

dayjs.locale('ru');

type WeekCalendarProps = {
  startDate?: Dayjs; // первый день недели, по умолчанию сегодня
};

export default function WeekCalendar(props: WeekCalendarProps) {
  const { startDate = dayjs() } = props;
  const currentDate = dayjs();

  const weekDays = useWeekDays(startDate);

  function handleClickDay(day: Dayjs) {
    console.log(day);
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 1,
        maxWidth: 768,
        mx: 'auto',
      }}
    >
      {weekDays.map((day) => (
        <Box
          key={day.toString()}
          onClick={() => handleClickDay(day)}
          sx={{
            aspectRatio: '1 / 1',
            p: 2,
            bgcolor: currentDate.isSame(day, 'day') ? 'primary.main' : 'grey.100',
            color: currentDate.isSame(day, 'day') ? 'primary.contrastText' : 'text.primary',
            borderRadius: 1,
            cursor: 'pointer',
            transition: '0.2s',
            '&:hover': {
              bgcolor: 'primary.light',
              color: 'primary.contrastText',
            },
          }}
        >
          <Typography variant="body2">{day.format('dddd DD.MM')}</Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          ></Box>
        </Box>
      ))}
    </Box>
  );
}
