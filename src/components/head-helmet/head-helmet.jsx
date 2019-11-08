import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { PAGE_NAMES } from '../../constants';

const { GAME, PAGE_NOT_FOUND } = PAGE_NAMES;

const APPLE_TOUCH_ICON_SIZES = [
  '57x57',
  '60x60',
  '72x72',
  '76x76',
  '114x114',
  '120x120',
  '144x144',
  '152x152',
  '180x180'
];

const ICON_SIZES = ['32x32', '96x96', '16x16'];

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
      <link rel="shortcut icon" href={`./${image}favicon.ico`}></link>
      {APPLE_TOUCH_ICON_SIZES.map(size => (
        <link rel="apple-touch-icon" sizes={size} href={`./${image}apple-icon-${size}.png`} />
      ))}
      <link rel="icon" type="image/png" sizes="192x192" href={`./${image}android-icon-192x192.png`} />
      {ICON_SIZES.map(size => (
        <link rel="icon" type="image/png" sizes={size} href={`./${image}favicon-${size}.png`} />
      ))}
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content={`./${image}ms-icon-144x144.png`} />
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
