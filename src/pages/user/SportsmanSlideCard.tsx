import { Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ActionIconButton from '@/shared/components/buttons/ActionIconButton.tsx';

export type SportsmanSlideCardPropsType = {
  keyId: number;
  name: string;
  group: string;
};

export default function SportsmanSlideCard(props: SportsmanSlideCardPropsType) {
  const moveFromList = (id: number) => {
    console.log(id);
  };
  return (
    <Box>
      <div>{props.name}</div>
      <div>{props.group}</div>
      <ActionIconButton
        callback={() => moveFromList(props.keyId)}
        icon={<DeleteIcon />}
        sx={{
          color: 'error.main',
          '&:hover': {
            backgroundColor: 'error.light',
          },
        }}
      />
    </Box>
  );
}
