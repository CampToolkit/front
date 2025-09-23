import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import GroupRow from '@/modules/groups/GroupRow.tsx';
import type { Group } from '@/common/api/group/GroupApi.type.ts';

interface Props {
  list: Group[];
  onDone?: () => Promise<void> | void;
}

export default function GroupsTable(props: Props) {
  const { list } = props;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 900 }}>Название</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((item) => (
            <GroupRow key={item.id} item={item} level={1} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
