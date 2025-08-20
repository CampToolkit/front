import { Box, Typography } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';

type WeekCalendarProps = {
  startDate?: Dayjs; // первый день недели, по умолчанию сегодня
};

export default function WeekCalendar({ startDate = dayjs() }: WeekCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  // генерируем массив из 7 дней недели
  const weekDays = Array.from({ length: 7 }, (_, i) => startDate.add(i, 'day'));

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)', // мобильные экраны - 1 день в ряду
          sm: 'repeat(2, 1fr)', // ≥600px - 2 дня в ряду
        },
        gap: 1,
        maxWidth: 768,
        mx: 'auto',
        p: 2,
      }}
    >
      {weekDays.map((day) => (
        <Box
          key={day.toString()}
          onClick={() => setSelectedDate(day)}
          sx={{
            aspectRatio: '1 / 1', // квадрат
            bgcolor: selectedDate?.isSame(day, 'day') ? 'primary.main' : 'grey.100',
            color: selectedDate?.isSame(day, 'day') ? 'primary.contrastText' : 'text.primary',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 1,
            cursor: 'pointer',
            transition: '0.2s',
            '&:hover': {
              bgcolor: 'primary.light',
              color: 'primary.contrastText',
            },
          }}
        >
          <Typography variant="body2">{day.format('ddd')}</Typography>
          <Typography variant="h6">{day.format('D')}</Typography>
        </Box>
      ))}
    </Box>
  );
}
