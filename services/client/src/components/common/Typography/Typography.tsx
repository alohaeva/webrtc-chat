import { memo } from 'react';
import clsx from 'clsx';

import { TypographyProps } from './Typography.types';
import styles from './Typography.module.scss';

const Typography = memo(
  ({
    noWrap,
    bold = false,
    className,
    variant = 'body1',
    children,
  }: TypographyProps) => {
    const commonClassName = clsx(
      className,
      styles[variant],
      bold ? styles.bold : '',
      noWrap ? styles.noWrap : ''
    );

    return <span className={commonClassName}>{children}</span>;
  }
);

export default Typography;
