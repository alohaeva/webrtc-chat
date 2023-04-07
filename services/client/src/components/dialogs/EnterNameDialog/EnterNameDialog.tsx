import React, { memo, useCallback } from 'react';
import { useStore } from 'effector-react';

import { Modal } from '../../common/Modal';
import { EnterNameForm } from '../../EnterNameForm';
import { Translation } from '../../common/Translation';

import {
    $enterNameDialogStore,
    AppDialogs,
    closeAppDialogEvent,
} from '../../../stores';

const EnterNameDialog = memo(() => {
    const enterNameDialog = useStore($enterNameDialogStore);

    const handleCloseDialog = useCallback(() => {
        closeAppDialogEvent(AppDialogs.EnterName);
    }, []);

    const handleCancel = useCallback(() => {}, []);

    const handleSubmit = useCallback(
        data => {
            console.log(data);
            handleCloseDialog();
        },
        [handleCloseDialog]
    );

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
