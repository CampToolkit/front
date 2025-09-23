import { Checkbox, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import type { ChangeEvent } from 'react';

import { useSportsmanApi } from '@/common/api/sportsman/hooks/use-sportsman-api.hook.ts';
import { useCampContext } from '@/modules/camp/providers/camp-context.ts';
const theadStyles = {
  fontWeight: '900',
};

export default function Sportsmen() {
  const { camp } = useCampContext();
  const { state: sportsmen } = useSportsmanApi(camp ? camp.id : undefined);

  const onChange = (e: ChangeEvent<HTMLInputElement>, personId: number) => {
    console.log(e, personId);
  };

  return (
    <div>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={theadStyles}>ФИО</TableCell>
            <TableCell sx={theadStyles} width={'1%'}>
              Наблюдать
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sportsmen.map((entity) => (
            <TableRow key={entity.id}>
              <TableCell>
                {entity.lastName} {entity.firstName} {entity.patrName}
              </TableCell>
              <TableCell align={'center'}>
                <Checkbox
                  key={`${entity.id}${entity.id}`}
                  onChange={(e) => onChange(e, entity.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
