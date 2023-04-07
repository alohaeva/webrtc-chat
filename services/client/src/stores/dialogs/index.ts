import { createEvent, createStore } from 'effector';
import { AppDialogs } from './types';

export const $enterNameDialogStore = createStore<boolean>(false);
export const openEnterNameDialogEvent = createEvent<AppDialogs>(
    'openEnterNameDialogEvent'
);
export const closeEnterNameDialogEvent = createEvent<AppDialogs>(
    'closeEnterNameDialogEvent'
);

export const openAppDialogEvent = createEvent<AppDialogs>('openAppDialogEvent');
export const closeAppDialogEvent = createEvent<AppDialogs>(
    'closeAppDialogEvent'
);
