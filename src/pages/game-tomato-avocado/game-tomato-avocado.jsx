import React, { Fragment } from 'react';
import { HeadHelmet } from '../../components/head-helmet/head-helmet';
import { ConsignmentTomatoAvocado } from '../../components/consignment-tomato-avocado/consignment-tomato-avocado';
import { PAGE_NAMES } from '../../constants';

export const GameTomatoAvocado = () => (
  <Fragment>
    <HeadHelmet page={PAGE_NAMES.GAME_TOMATO_AVOCADO} />
    <ConsignmentTomatoAvocado />
  </Fragment>
);
