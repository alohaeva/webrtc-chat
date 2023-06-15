import { Resources } from '../../../types';

export type TranslationProps = {
  nameSpace: keyof Resources;
  translation: string;
  options?: Record<string, unknown>;
};
