import {
    $enterNameDialogStore,
    closeEnterNameDialogEvent,
    openEnterNameDialogEvent,
} from './index';

$enterNameDialogStore
    .on(openEnterNameDialogEvent, () => true)
    .on(closeEnterNameDialogEvent, () => false);
