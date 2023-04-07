import React, { useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { AppDialogs, openAppDialogEvent } from '@store';

import { EnterNameDialog } from '@components/dialogs/EnterNameDialog';

export default function Home() {
    useEffect(() => {
        openAppDialogEvent(AppDialogs.EnterName);
    }, []);

    return (
        <>
            <EnterNameDialog />
        </>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                'dialogs',
                'forms',
            ])),
        },
    };
}
