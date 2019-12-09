import { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { STEPS, TYPES, ACTION_MESSAGES } from '../../constants';
import { webSocket } from "rxjs/webSocket";
// import { WebSocketSubject } from 'rxjs/webSocket';

const subject = webSocket({
  url: 'ws://localhost:8080',
  deserializer: ({data}) => data
});

export class ConsignmentWhoYouAreCore extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  };

  state = {
    step: STEPS.START,
    theme: '',
    opponentName: '',
    numberOfPlayers: 0,
    actions: '',
    playStory: [],
    isShowMessage: true,
  };

  handleChange = (event) => {
    this.setState({ opponentName: event.target.value });
  }

  handleButtonClick = () => {
    const {opponentName, theme, step} = this.state;
    console.log(`sent to server ${opponentName}`);
    if (step===STEPS.START && !theme || step===STEPS.ACT && theme) {
    subject.next({step: STEPS.ACT, message: opponentName });
    };
    this.setState(prevState=>({opponentName: '', step: prevState.step + 1}))
  }

  createStepMessage = () => {
    const {step, isShowMessage, numberOfPlayers} = this.state;
    console.log('here');
    if(step===STEPS.START && numberOfPlayers<2) {
      return ACTION_MESSAGES.NOT_ENOUGH_PLAYERS
    }
    if (step===STEPS.START) {
      return ACTION_MESSAGES.START
    }
    if (step===STEPS.PLAY && isShowMessage){
      return ACTION_MESSAGES.WAIT
    }
    return ''
  }

  changeStateAccordingServerMessage = (serverMsg) => {
    const {type, message} = serverMsg;
    if (type===TYPES.GENERAL) {
    this.setState({...message});
  } else {
    const {playStory} = this.state;
    const {person, message} = message;
     const newPlayStory =  playStory.concat({person, message});
     console.log('newPlayStory', newPlayStory);
  }
  console.log('serverMsg', serverMsg);

  }

  componentDidMount() {
    subject.subscribe(
      msg => this.changeStateAccordingServerMessage(JSON.parse(msg))
        , // Called whenever there is a message from the server.
      err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      () => console.log('complete') // Called when connection is closed (for whatever reason).
    );
  }

  componentWillUnmount() {
    subject.complete();
  }


  render() {
    const { theme, step, opponentName, numberOfPlayers, actions } = this.state;
    const { children } = this.props;
    const {handleChange, handleButtonClick} = this;
    return children({
      theme,
      step,
      actions: actions || this.createStepMessage(),
      opponentName,
      handleChange,
      numberOfPlayers,
      handleButtonClick,
    });
  }
}
