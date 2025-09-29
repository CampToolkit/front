import { useNavigate } from 'react-router';

import { Box, Button, colors, Stack, Typography } from '@mui/material';
import SportsmenListWithSignButton from '@/common/components/sportsmen/SportsmenListWithSignButton.tsx';
import { useSportsmanApi } from '@/common/api/sportsman/hooks/use-sportsman-api.hook.ts';
import { useModal } from '@/app/providers/global-modal/use-modal.hook.ts';
import BaseTile from '@/common/tile/BaseTile.tsx';

const buttonStyles = { boxShadow: 'inset 1px 1px 8px #ddd' };

export default function Home() {
  const navigate = useNavigate();
  const { openModal } = useModal();
  const { state: sportsmen } = useSportsmanApi();

  const addSportsmanToSpyList = (sportsmanId: number) => {
    console.log(sportsmanId);
  };
  const component = () => (
    <SportsmenListWithSignButton sportsmen={sportsmen} onClick={addSportsmanToSpyList} />
  );
  const onButtonClick = () => {
    openModal({
      content: component,
      title: 'Спортсмены',
      showConfirmButton: false,
      showCancelButton: false,
    });
  };
  return (
    <Box>
      {sportsmen && sportsmen.length > 0 && (
        <Typography variant="h6"> Спортсмены, на которых вы подписаны</Typography>
      )}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 1,
          flexWrap: 'wrap',
        }}
      >
        {sportsmen &&
          sportsmen.map((entity) => (
            <BaseTile
              key={entity.id}
              sx={{
                border: 'none',
                backgroundColor: colors.grey['100'],
                flexDirection: 'column',
                justifyContent: 'flex-start',
                '&:hover': { backgroundColor: 'none', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' },
              }}
            >
              <Box sx={{ marginBottom: 'auto' }}>
                <Typography variant="h6">
                  {entity.lastName} {entity.firstName}
                </Typography>
                <Typography variant="body2">Участник текущего сбора:</Typography>
              </Box>
              <Stack gap={1}>
                <Button
                  sx={buttonStyles}
                  onClick={() => {
                    const GROUP_ID = 25;
                    const params = new URLSearchParams({ groupId: String(GROUP_ID) });
                    navigate({
                      pathname: `/schedule/3/sportsman/${entity.id}`,
                      search: `${params.toString()}`,
                    });
                  }}
                >
                  Расписание
                </Button>
                <Button
                  size="small"
                  sx={buttonStyles}
                  onClick={() => navigate(`/schedule/3/additional-practice`)}
                >
                  Записаться на дополнительные занятия
                </Button>
              </Stack>
            </BaseTile>
          ))}
      </Box>

      <Button variant="contained" size="large" fullWidth sx={{ mt: 2 }} onClick={onButtonClick}>
        Подписаться на спортсмена
      </Button>
    </Box>
  );
}
