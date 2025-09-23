import { TableCell, TableRow } from '@mui/material';
import type { Group } from '@/common/api/group/GroupApi.type.ts';

interface Props {
  item: Group;
  level: number;
}

export default function GroupRow({ item, level }: Props) {
  return (
    <>
      <TableRow key={item.id}>
        <TableCell
          sx={{
            paddingLeft: `${level}rem`,
          }}
        >
          {item.name}
        </TableCell>
      </TableRow>
      {item?.children &&
        item?.children.map((child) => <GroupRow key={child.id} item={child} level={level + 1} />)}
    </>
  );
}
