import React from 'react';
import { GetStaticPropsContext } from 'next/types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Layout } from '@components/Layout';

import { EnterNameContainer } from '../containers/EnterNameContainer';

export default function Home() {
  return (
    <Layout>
      <EnterNameContainer />
    </Layout>
  );
}

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'common',
      'dialogs',
      'forms',
      'general',
    ])),
  },
});
