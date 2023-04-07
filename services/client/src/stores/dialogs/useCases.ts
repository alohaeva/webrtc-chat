import { split } from 'effector';

import {
    closeAppDialogEvent,
    closeEnterNameDialogEvent,
    openAppDialogEvent,
    openEnterNameDialogEvent,
} from './index';
import { AppDialogs } from './types';

split({
    source: openAppDialogEvent,
    match: {
        enterName: (dialogType: AppDialogs) =>
            dialogType === AppDialogs.EnterName,
    },
    cases: {
        enterName: openEnterNameDialogEvent,
    },
});

split({
    source: closeAppDialogEvent,
    match: {
        enterName: dialogType => dialogType === AppDialogs.EnterName,
    },
    cases: {
        enterName: closeEnterNameDialogEvent,
    },
});
