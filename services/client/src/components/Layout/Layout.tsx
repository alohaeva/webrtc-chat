import React, { memo } from 'react';

import { LayoutProps } from '@components/Layout/Layout.types';
import { Grid } from '@components/common/Grid';

import styles from './Layout.module.scss';

const Layout = memo(({ children }: LayoutProps) => {
  return (
    <Grid
      container
      fullWidth
      justifyContent="center"
      alignItems="center"
      className={styles.wrapper}
    >
      {children}
    </Grid>
  );
});

export default Layout;
