import React from 'react';

export type TypographyProps = React.ComponentProps<'span'> & {
  className?: string;
  variant?: string;
  noWrap?: boolean;
  bold?: boolean;
};
