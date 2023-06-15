import React from 'react';

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: React.ReactNode;
  body: React.ReactNode;
  buttons?: React.ReactNode;
};
