import { memo, PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './Paper.module.scss';
import { PaperProps } from './Paper.types';

const Paper = memo(
  ({
    className,
    size = 'md',
    elevation = '1',
    children,
  }: PropsWithChildren<PaperProps>) => {
    const commonClassName = clsx(
      styles.paper,
      styles[`size-${size}`],
      styles[`elevation-${elevation}`],
      className
    );

    return <div className={commonClassName}>{children}</div>;
  }
);

export default Paper;
