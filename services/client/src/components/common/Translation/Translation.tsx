import { memo } from 'react';

import { useTranslate } from '@hooks/useTranslation';

import { TranslationProps } from './Translation.types';

const Translation = ({ nameSpace, translation, options }: TranslationProps) => {
    const { translate } = useTranslate(nameSpace);

    return <>{translate(translation, options)}</>;
}

export default memo(Translation);
