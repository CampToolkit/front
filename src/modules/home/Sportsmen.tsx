import { Box, Button, Table, TableBody, TableCell, TableRow } from '@mui/material';
import type { Sportsman } from '@/common/api/sportsman/SportsmanApi.type';

const cellStyles = {
  padding: '0.5rem',
};

interface Props {
  sportsmen: Sportsman[];
  onClick: (sportsmanId: number) => void;
}

export default function Sportsmen(props: Props) {
  const { sportsmen, onClick } = props;

  return (
    <Box
      sx={{
        overflowY: 'auto',
        scrollbarWidth: 'none',
      }}
    >
      <Table>
        <TableBody>
          {sportsmen.map((entity) => (
            <TableRow key={entity.id}>
              <TableCell width="99%" sx={cellStyles}>
                {entity.lastName} {entity.firstName} {entity.patrName}
              </TableCell>
              <TableCell align={'center'} sx={cellStyles}>
                <Button variant="outlined" onClick={() => onClick(entity.id)}>
                  Подписаться
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
