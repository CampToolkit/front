import { Box, Button } from '@mui/material';
import Sportsmen from '@/modules/home/Sportsmen.tsx';
import { useSportsmanApi } from '@/common/api/sportsman/hooks/use-sportsman-api.hook.ts';
import { useModal } from '@/app/providers/global-modal/use-modal.hook.ts';

export default function Home() {
  const { openModal } = useModal();
  const { state: sportsmen } = useSportsmanApi();
  const addSportsmanToSpyList = (sportsmanId: number) => {
    console.log(sportsmanId);
  };
  const component = () => <Sportsmen sportsmen={sportsmen} onClick={addSportsmanToSpyList} />;
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
      <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={onButtonClick}>
        Подписаться на спортсмена
      </Button>
    </Box>
  );
}
