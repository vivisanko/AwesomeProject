import React, { Fragment } from 'react';
import { HeadHelmet } from '../../components/head-helmet/head-helmet';
import {ConsignmentWhoYouAre} from '../../components/consignment-who-you-are/consignment-who-you-are'
import { PAGE_NAMES } from '../../constants';

export const GameWhoYouAre = () => (
  <Fragment>
    <HeadHelmet page={PAGE_NAMES.GAME_WHO_YOU_ARE} />
    <ConsignmentWhoYouAre/>
  </Fragment>
);
