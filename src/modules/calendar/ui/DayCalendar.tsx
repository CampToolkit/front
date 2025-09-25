import { Box, Grid, Paper, Typography, type SxProps, type Theme } from '@mui/material';

import { useCalendarContext } from '@/modules/calendar/providers/calendar-context.ts';
import { generateTimeSlots } from '@/modules/calendar/utils/generate-time-slots';
import {
  SLOT_HEIGHT,
  SLOTS_AMOUNT_IN_HOUR,
  START_HOUR,
} from '@/modules/calendar/constants/time-table.const.ts';
import SchedulePositionWrapper from './SchedulePositionWrapper';
import EventCard from '@/modules/calendar/ui/EventCard.tsx';
import { calcLessonPosition } from '../utils/calc-lesson-position';
import dayjs from 'dayjs';
import DateNavigator from '@/modules/calendar/ui/DateNavigator.tsx';
import { distributeEvents } from '@/modules/calendar/utils/distribute-events/use-distribute-events.ts';

const tableTitleStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '40px',
  textAlign: 'center',
  verticalAlign: 'middle',
  backgroundColor: '#f5f5f5',
};

export default function DayCalendar() {
  const { currentDate, setCurrentDate, events } = useCalendarContext();

  const hourSlots = generateTimeSlots({
    date: currentDate,
    startHour: START_HOUR,
    endHour: 21,
    step: {
      value: 1,
      unit: 'hour',
    },
  });

  const minuteSlots = generateTimeSlots({
    date: currentDate,
    startHour: START_HOUR,
    endHour: 21,
    endMinute: 45,
    step: {
      value: 15,
      unit: 'minute',
    },
  });

  const distributedEvents = distributeEvents({ list: events, currentDate });

  return (
    <Box>
      <Box sx={{ paddingInline: 2, paddingBlockEnd: 2 }}>
        <Grid container spacing={1}>
          <Grid size={1}>
            <Paper sx={tableTitleStyles}>
              <Typography variant="subtitle1">время</Typography>
            </Paper>
            {hourSlots.map((time) => (
              <Paper
                key={time.format('HH:mm')}
                sx={{
                  p: 1,
                  height: SLOT_HEIGHT * SLOTS_AMOUNT_IN_HOUR,
                  textAlign: 'center',
                  border: '1px solid #e0e0e0',
                }}
              >
                <Typography variant="body2">{time.format('HH:mm')}</Typography>
              </Paper>
            ))}
          </Grid>

          <Grid size={11}>
            <Paper sx={tableTitleStyles}>
              <DateNavigator
                value={currentDate}
                onChange={(value) => {
                  if (value) {
                    setCurrentDate(value);
                  }
                }}
              />
            </Paper>
            <Box
              sx={{
                position: 'relative',
              }}
            >
              {minuteSlots.map((time, index) => (
                <Paper
                  key={time.format('DD.MM HH:mm')}
                  sx={{
                    p: 1,
                    height: SLOT_HEIGHT,
                    borderTop: '1px solid',
                    borderTopColor: time.minute() === 0 && index > 0 ? '#666' : '#e0e0e0',
                    borderRadius: 0,
                    cursor: 'pointer',
                  }}
                  className="js-time-slot"
                  data-slot-time={time.toISOString()}
                ></Paper>
              ))}
              {distributedEvents.map((events) => {
                return events.map((event, index) => (
                  <SchedulePositionWrapper
                    key={event.id}
                    position={calcLessonPosition({
                      event,
                      eventIndex: index,
                      overlapEventsAmount: events.length,
                    })}
                  >
                    <EventCard
                      startDate={dayjs(event.startDate)}
                      groupName={event.groups.map((item) => item.name).join(', ')}
                      coachName={event.coaches.map((item) => item.lastName).join(', ')}
                      campLocationName={event.auditorium.name}
                    />
                  </SchedulePositionWrapper>
                ));
              })}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
