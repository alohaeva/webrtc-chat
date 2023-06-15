// place it where you store your types
// import all namespaces for default language only
import common from '../../public/locales/en/common.json';
import dialogs from '../../public/locales/en/dialogs.json';
import forms from '../../public/locales/en/forms.json';
import general from '../../public/locales/en/general.json';

export interface Resources {
  common: typeof common;
  dialogs: typeof dialogs;
  forms: typeof forms;
  general: typeof general;
  // as many as files you have
}
