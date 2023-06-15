import { useStore } from 'effector-react';
import React, { memo, useCallback } from 'react';

import { Modal } from '@components/common/Modal';
import { EnterNameForm } from '@components/EnterNameForm';
import { Translation } from '@components/common/Translation';
import { $enterNameDialogStore, AppDialogs, closeAppDialogEvent } from '@store';

import { FormSchemaType } from '../../../schemas';

const EnterNameDialog = memo(() => {
  const enterNameDialog = useStore($enterNameDialogStore);

  const handleCloseDialog = useCallback(() => {
    closeAppDialogEvent(AppDialogs.EnterName);
  }, []);

  const handleCancel = useCallback(() => {
    handleCloseDialog();
  }, []);

  const handleSubmit = useCallback((data: FormSchemaType) => {
    console.log(data);
    handleCloseDialog();
  }, []);

  return (
    <Modal
      open={enterNameDialog}
      onClose={handleCloseDialog}
      title={
        <Translation
          nameSpace="dialogs"
          translation="enterNameDialog.title"
        />
      }
      body={
        <EnterNameForm
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      }
    />
  );
});

export default EnterNameDialog;
