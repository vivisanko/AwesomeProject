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
  image: ''
};

const metaInfoGame = {
  title: 'Awesome products game',
  description: 'Pay attention, choose what you read',
  keywords: 'play, tomato, avocado',
  canonical: ''
};

const metaInfoNotFoundPage = {
  title: 'Not found page in awesome products',
  description: 'go to main page',
  keywords: 'play, tomato, avocado, not found, ',
  canonical: '',
  currentUrl: '',
  pageType: 'website',
  image: ''
};

const META_INFO_MAPPING = {
  DEFAULT: metaInfoDefault,
  [GAME]: metaInfoGame,
  [PAGE_NOT_FOUND]: metaInfoNotFoundPage
};

export const HeadHelmet = ({ page }) => {
  const metaInfo = META_INFO_MAPPING[page] ? { ...metaInfoDefault, ...META_INFO_MAPPING[page] } : metaInfoDefault;

  const { title, description, keywords, canonical } = metaInfo;

  return (
    <Helmet>
      <title key="title">{title}</title>,
      <meta key="description" name="description" content={description} />
      <meta key="keywords" name="keywords" content={keywords} />
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
