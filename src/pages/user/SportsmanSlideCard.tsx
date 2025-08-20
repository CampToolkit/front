import { Box, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Delete';

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
      <IconButton
        onClick={() => moveFromList(props.keyId)}
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          alignItems: 'right',
          color: 'error.main',
          '&:hover': {
            backgroundColor: 'error.light',
          },
        }}
      >
        <EditIcon />
      </IconButton>
    </Box>
  );
}
