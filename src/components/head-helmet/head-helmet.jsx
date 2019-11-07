import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

import { PAGE_NAMES } from '../../../components';

const { FOREIN_LAND, HOME } = PAGE_NAMES;

const metaInfo = {
  title: 'Awesome products',
  description: 'Check what your brain sees',
  keywords: 'brain',
  canonical: '',
  currentUrl: '',
  pageType: 'website',
  image: ''
};

// const GAME = {
//   title: 'Awesome products game',
//   description: 'Pay attention, choose what you read',
//   keywords: 'play, tomato, avocado',
//   canonical: '',
//   currentUrl: '',
//   pageType: 'website',
//   image: ''
// };

export const HeadHelmet = ({ page }) => {
  const { title, description, keywords } = metaInfo;
  return (
    <Helmet>
      <title key="title">{title}</title>,
      <meta key="description" name="description" content={description} />
      <meta key="keywords" name="keywords" content={keywords} />
    </Helmet>
  );
};

HeadHelmet.propTypes = {
  page: PropTypes.string
};
HeadHelmet.defaultProps = {
  page: ''
};

// export default HeadHelmet;
