import { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { STEPS } from '../../constants';


export class ConsignmentWhoYouAreCore extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  };

  state = {
    step: STEPS.START,
    theme: 'movie characters',
    opponentName: '',
  };

  handleChange = (event) => {
    this.setState({ opponentName: event.target.value });
  }

  handleButtonClick = () => {
    console.log('sent to server');

  }
  // componentDidMount() {
  //   const productName = this.generateName();
  //   this.setState({ endDate: Date.now() + PLAY_TIME, productName });
  // }

  // generateName = () =>
  //   Math.round(Math.random())
  //     ? LIKE_PRODUCT_COLOR[TOMATO][Math.floor(Math.random() * LIKE_PRODUCT_COLOR[TOMATO].length)]
  //     : LIKE_PRODUCT_COLOR[AVOCADO][Math.floor(Math.random() * LIKE_PRODUCT_COLOR[AVOCADO].length)];

  // handleClick = ({
  //   currentTarget: {
  //     dataset: { name }
  //   }
  // }) => {
  //   const { productName } = this.state;
  //   const newProductName = this.generateName();

  //   this.setState(prevState => ({
  //     score: R.includes(productName, LIKE_PRODUCT_COLOR[name]) ? ++prevState.score : 0,
  //     productName: newProductName
  //   }));
  // };

  render() {
    const { theme, step, opponentName } = this.state;
    const { children } = this.props;
    const {handleChange, handleButtonClick} = this;
    return children({
      theme,
      step,
      opponentName,
      handleChange,
      handleButtonClick
    });
  }
}
