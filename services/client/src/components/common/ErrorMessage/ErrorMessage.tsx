import React, { memo } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

import { Typography } from '../Typography';

import styles from './ErrorMessage.module.scss';
import { ErrorMessageProps } from './ErrorMessage.types';

const ErrorMessage = memo(({ isErrorVisible, error }: ErrorMessageProps) => {
  if (!isErrorVisible) return null;

  return (
    <div className={styles.errorWrapper}>
      <ExclamationCircleIcon
        width={16}
        height={16}
      />
      <Typography variant="body2">{error}</Typography>
    </div>
  );
});

export default ErrorMessage;
