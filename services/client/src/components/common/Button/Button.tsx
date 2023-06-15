import React, { memo } from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

const Button = memo(
  ({
    type = 'button',
    variant = 'primary',
    label = 'Button',
    size = 'md',
    onClick,
  }: ButtonProps) => {
    const className = clsx(
      styles.base,
      styles[variant],
      styles[`size-${size}`]
    );

    return (
      <button
        type={type}
        className={className}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
);

export default Button;
