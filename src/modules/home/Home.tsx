import { Box, Button, Typography } from '@mui/material';
import SportsmenListWithSignButton from '@/common/components/sportsmen/SportsmenListWithSignButton.tsx';
import { useSportsmanApi } from '@/common/api/sportsman/hooks/use-sportsman-api.hook.ts';
import { useModal } from '@/app/providers/global-modal/use-modal.hook.ts';
import { Link } from 'react-router-dom';
import BaseTile from '@/common/tile/BaseTile.tsx';

export default function Home() {
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
            <Link
              key={entity.id}
              to={`/person-schedule/${entity.id}`}
              style={{ textDecoration: 'none' }}
            >
              <BaseTile>
                <Box>
                  <Typography variant="body2" color="primary.contrastText">
                    {entity.lastName} {entity.firstName}
                  </Typography>
                </Box>
              </BaseTile>
            </Link>
          ))}
      </Box>

      <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={onButtonClick}>
        Подписаться на спортсмена
      </Button>
    </Box>
  );
}
