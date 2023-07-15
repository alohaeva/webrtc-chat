import React, { memo, useCallback } from 'react';

import { Typography } from '@components/common/Typography';
import { Translation } from '@components/common/Translation';

import { Paper } from '../../components/common/Paper';
import { EnterNameForm } from '../../components/EnterNameForm';
import { FormSchemaType } from '../../schemas';

import styles from './EnterNameContainer.module.scss';
import {Router} from "next/router";
import {generateUuid} from "../../utils/generators/generateUuid";

const EnterNameContainer = memo(() => {
  const handleSubmit = useCallback((data: FormSchemaType) => {
    console.log(data);
    Router.push(`/chat?roomId=${generateUuid()}`);
  }, []);

  return (
    <Paper
      elevation="6"
      size="md"
      className={styles.paperWrapper}
    >
      <Typography
        variant="h4"
        bold
      >
        <Translation
          nameSpace="general"
          translation="enterName.title"
        />
      </Typography>
      <EnterNameForm onSubmit={handleSubmit} />
    </Paper>
  );
});

export default EnterNameContainer;
