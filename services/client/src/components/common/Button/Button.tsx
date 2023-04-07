import React, { memo } from 'react';

import styles from './Button.module.scss';

import { ButtonProps } from './Button.types';

const Button = memo(({ type = 'button', label, onClick }: ButtonProps) => {
    return (
        <button type={type} className={styles.base} onClick={onClick}>
            {label}
        </button>
    );
});

export default Button;
