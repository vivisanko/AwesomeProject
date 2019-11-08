import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { PAGE_NAMES } from '../../constants';

const { GAME, PAGE_NOT_FOUND } = PAGE_NAMES;

const metaInfoDefault = {
  title: 'Awesome products',
  description: 'Check what your brain sees',
  keywords: 'brain',
  canonical: 'http://localhost:3000/',
  currentUrl: '',
  pageType: 'website',
  image: 'avocado/'
};

const metaInfoGame = {
  title: 'Awesome products game',
  description: 'Pay attention, choose what you read',
  keywords: 'play, tomato, avocado',
  canonical: '',
  image: 'tomato/'
};

const metaInfoNotFoundPage = {
  title: 'Not found page in awesome products',
  description: 'go to main page',
  keywords: 'play, tomato, avocado, not found, ',
  canonical: '',
  currentUrl: '',
  pageType: 'website',
  image: 'carrot/'
};

const META_INFO_MAPPING = {
  DEFAULT: metaInfoDefault,
  [GAME]: metaInfoGame,
  [PAGE_NOT_FOUND]: metaInfoNotFoundPage
};

export const HeadHelmet = ({ page }) => {
  const metaInfo = META_INFO_MAPPING[page] ? { ...metaInfoDefault, ...META_INFO_MAPPING[page] } : metaInfoDefault;

  const { title, description, keywords, canonical, image } = metaInfo;

  return (
    <Helmet>
      <title key="title">{title}</title>,
      <meta key="description" name="description" content={description} />
      <meta key="keywords" name="keywords" content={keywords} />
      <link rel="apple-touch-icon" sizes="57x57" href={`/${image}apple-icon-57x57.png`} />
      <link rel="apple-touch-icon" sizes="60x60" href={`/${image}apple-icon-60x60.png`} />
      <link rel="apple-touch-icon" sizes="72x72" href={`/${image}apple-icon-72x72.png`} />
      <link rel="apple-touch-icon" sizes="76x76" href={`/${image}apple-icon-76x76.png`} />
      <link rel="apple-touch-icon" sizes="114x114" href={`/${image}apple-icon-114x114.png`} />
      <link rel="apple-touch-icon" sizes="120x120" href={`/${image}apple-icon-120x120.png`} />
      <link rel="apple-touch-icon" sizes="144x144" href={`/${image}apple-icon-144x144.png`} />
      <link rel="apple-touch-icon" sizes="152x152" href={`/${image}apple-icon-152x152.png`} />
      <link rel="apple-touch-icon" sizes="180x180" href={`/${image}apple-icon-180x180.png`} />
      <link rel="icon" type="image/png" sizes="192x192" href={`/${image}android-icon-192x192.png`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`/${image}tomato/favicon-32x32.png`} />
      <link rel="icon" type="image/png" sizes="96x96" href={`/${image}favicon-96x96.png`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`/${image}favicon-16x16.png`} />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content={`/${image}ms-icon-144x144.png`} />
      <meta name="theme-color" content="#ffffff" />
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};

HeadHelmet.propTypes = {
  page: PropTypes.string
};
HeadHelmet.defaultProps = {
  page: 'DEFAULT'
};
