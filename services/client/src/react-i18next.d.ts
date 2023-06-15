import 'react-i18next';
import { Resources as MyResources } from './types';

declare module 'react-i18next' {
  // and extend them!
  interface Resources extends MyResources {}
}
