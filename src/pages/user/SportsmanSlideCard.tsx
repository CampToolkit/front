import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ActionIconButton from '@/common/components/buttons/ActionIconButton.tsx';

export type SportsmanSlideCardPropsType = {
  keyId: number;
  spyingPersonId: number;
  name: string;
  group: string;
};

export default function SportsmanSlideCard(props: SportsmanSlideCardPropsType) {
  const moveFromList = (id: number) => {
    console.log(id);
  };
  return (
    <Box component={Link} to={`/calendar?spyingPersonId=${props.spyingPersonId}`}>
      <div>{props.name}</div>
      <div>{props.group}</div>
      <ActionIconButton
        callback={() => moveFromList(props.spyingPersonId)}
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
