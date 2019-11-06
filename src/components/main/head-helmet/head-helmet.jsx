import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { PAGE_NAMES } from '../../../components';

const { FOREIN_LAND, HOME } = PAGE_NAMES;

const defaultMetaInfo = {
  title: 'Awesome products',
  description: 'Check what your brain sees',
  keywords: 'brain',
  canonical: '',
  currentUrl: '',
  pageType: 'website',
  image: ''
};


const HeadHelmet = page =>
  !page ? (
    <Helmet>
      <title key="title">{defaultMetaInfo.title}</title>,
      <meta key="description" name="description" content={defaultMetaInfo.description} />
      <meta key="keywords" name="keywords" content={defaultMetaInfo.keywords} />,
    </Helmet>
  ) : (
    <Helmet>
      <title key="title">{[page].title}</title>,
      <meta key="description" name="description" content={[page].description} />
      <meta key="keywords" name="keywords" content={[page].keywords} />
    </Helmet>
  );
