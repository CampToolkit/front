// src/shared/components/AspectCard.tsx
import { Card } from '@mui/material';
import type { CardProps } from '@mui/material';
import type { ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/system';

type AspectCardProps = {
  children: ReactNode;
  sx?: SxProps<Theme>;
} & Omit<CardProps, 'children' | 'sx'>;

export default function AspectCard({ children, sx, ...cardProps }: AspectCardProps) {
  return (
    <Card
      {...cardProps}
      sx={{
        position: 'relative',
        overflow: 'hidden',

        aspectRatio: '3 / 1',
        width: '100%',
        maxHeight: '576px',
        display: 'flex',
        flexDirection: 'column',

        borderRadius: 2,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        ...sx,
      }}
    >
      {children}
    </Card>
  );
}
