import React, { memo } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

import styles from './ErrorMessage.module.scss';

import { ErrorMessageProps } from './ErrorMessage.types';

const ErrorMessage = memo(({ error }: ErrorMessageProps) => {
    return (
        <div className={styles.errorWrapper}>
            {/*<ErrorIcon />*/}
            <ExclamationCircleIcon width={16} height={16} />
            {error}
        </div>
    );
});

export default ErrorMessage;
