import { memo } from 'react';
import clsx from 'clsx';

import { GridProps } from './Grid.types';
import styles from './Grid.module.scss';

const Grid = memo(
  ({
    container = false,
    justifyContent = 'initial',
    alignItems = 'initial',
    fullWidth = true,
    children,
    className,
  }: GridProps) => {
    const commonClassName = clsx(
      className,
      container ? styles.flexContainer : '',
      container && fullWidth ? styles.fullWidth : '',
      container ? styles[`justifyContent-${justifyContent}`] : '',
      container ? styles[`alignItems-${alignItems}`] : ''
    );

    return <div className={commonClassName}>{children}</div>;
  }
);

export default Grid;
