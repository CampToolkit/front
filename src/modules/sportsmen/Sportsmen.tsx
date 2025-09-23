import { Checkbox, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import type { ChangeEvent } from 'react';
const theadStyles = {
  fontWeight: 'bold',
};
export default function Sportsmen() {
  const fields = [];
  const sporstmen = [];

  const onChange = (e: ChangeEvent<HTMLInputElement>, personId: number) => {
    console.log(e, personId);
  };

  return (
    <div>
      <div>sportsmen</div>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {fields.map((field) => (
              <TableCell
                key={field.key as string}
                sx={{
                  ...theadStyles,
                }}
              >
                {field.label}
              </TableCell>
            ))}
            <TableCell sx={theadStyles} width={'1%'}>
              Наблюдать
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sporstmen.map((entity) => (
            <TableRow key={entity.id}>
              {fields.map((field) => (
                <TableCell>{entity[field.key] as string}</TableCell>
              ))}
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
