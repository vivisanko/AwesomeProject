import React, { Fragment } from 'react';
import { HeadHelmet } from '../../components/head-helmet/head-helmet';
import { Consignment } from '../../components/consignment/consignment';
import { PAGE_NAMES } from '../../constants';

export const Game = () => (
  <Fragment>
    <HeadHelmet page={PAGE_NAMES.GAME} />
    <Consignment />
  </Fragment>
);
