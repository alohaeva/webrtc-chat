import React from 'react';

export type ButtonProps = React.ComponentProps<'button'> & {
  label: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'error' | 'warning';
  size?: 'md';
};
