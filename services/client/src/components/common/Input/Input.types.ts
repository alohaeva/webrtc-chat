import React, { FocusEventHandler, ChangeEventHandler } from 'react';

export type InputProps = {
  label: React.ReactNode;
  id: string;
  fullWidth: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
  name: string;
};
