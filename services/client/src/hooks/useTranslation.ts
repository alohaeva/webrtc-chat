import { useTranslation as useT } from 'next-i18next';
import { useCallback } from 'react';

export const useTranslate = (nameSpace: string) => {
  const { t } = useT(nameSpace);

  const translate = useCallback(
    (translation: string, options = {}) => {
      return t(translation, options);
    },
    [t]
  );

  return {
    translate,
  };
};
