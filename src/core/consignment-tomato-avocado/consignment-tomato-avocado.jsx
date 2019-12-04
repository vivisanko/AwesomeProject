import { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { PRODUCTS, LIKE_PRODUCT_COLOR, PLAY_TIME } from '../../constants';

const { AVOCADO, TOMATO } = PRODUCTS;

export class ConsignmentTomatoAvocadoCore extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  };

  state = {
    score: 0,
    productName: '',
    endDate: 0
  };

  componentDidMount() {
    const productName = this.generateName();
    this.setState({ endDate: Date.now() + PLAY_TIME, productName });
  }

  generateName = () =>
    Math.round(Math.random())
      ? LIKE_PRODUCT_COLOR[TOMATO][Math.floor(Math.random() * LIKE_PRODUCT_COLOR[TOMATO].length)]
      : LIKE_PRODUCT_COLOR[AVOCADO][Math.floor(Math.random() * LIKE_PRODUCT_COLOR[AVOCADO].length)];

  handleClick = ({
    currentTarget: {
      dataset: { name }
    }
  }) => {
    const { productName } = this.state;
    const newProductName = this.generateName();

    this.setState(prevState => ({
      score: R.includes(productName, LIKE_PRODUCT_COLOR[name]) ? ++prevState.score : 0,
      productName: newProductName
    }));
  };

  render() {
    const { endDate, productName, score } = this.state;
    const { children } = this.props;
    const { handleClick } = this;
    return children({
      endDate,
      productName,
      score,
      handleClick,
      isDisabled: Date.now() > endDate
    });
  }
}
