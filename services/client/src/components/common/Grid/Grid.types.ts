import React from 'react';

export type GridProps = React.ComponentProps<'div'> & {
  container?: boolean;
  justifyContent?: HTMLDivElement["style"]["justifyContent"];
  alignItems?: string;
  fullWidth?: boolean;
};
