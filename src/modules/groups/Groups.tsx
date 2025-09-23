import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export default function Groups() {
  return (
    <div>
      <div>Groups</div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Фамилия</TableCell>
              <TableCell>Имя</TableCell>
              <TableCell>Отчество</TableCell>
              <TableCell width={'1%'}></TableCell>
              <TableCell width={'1%'}></TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </div>
  );
}
