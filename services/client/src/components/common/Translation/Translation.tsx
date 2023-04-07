import { memo } from 'react';
import { useTranslate } from '../../../hooks/useTranslation';
import { TranslationProps } from './Translation.types';

const Translation = memo(
    ({ nameSpace, translation, options }: TranslationProps) => {
        const { translate } = useTranslate(nameSpace);

        if (nameSpace && translation) {
            return <>{translate(translation, options)}</>;
        }

        return null;
    }
);

export default Translation;
