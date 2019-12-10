import { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { STEPS, TYPES, ACTION_MESSAGES } from '../../constants';
import { webSocket } from "rxjs/webSocket";

export class ConsignmentWhoYouAreCore extends Component {
  subject;

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
    isActive: false,
    question: '',
  };

  componentDidMount() {
    this.subject = webSocket({
        url: 'ws://localhost:8080',
        deserializer: ({data}) => data
      });
    this.subject.subscribe(
      msg => this.changeStateAccordingServerMessage(JSON.parse(msg))
        , // Called whenever there is a message from the server.
      err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      () => console.log('complete') // Called when connection is closed (for whatever reason).
    );
  }

  handleChange = (event) => {
    console.log('event',event);

    const item = event.currentTarget;
    console.log('item', item.dataset.name);

    this.setState({ [item.dataset.name]: event.target.value });
  }

  handleButtonClick = () => {
    const {opponentName, theme, step, question, isActive} = this.state;
    console.log(`sent to server ${opponentName}`);
    if (step===STEPS.START) {
      if(!theme){
        console.log('1');
        this.subject.next({step: STEPS.ACT, message: 'generateTheme' });
      }
      console.log('2');
      this.setState({step: STEPS.ACT});
      return;
    };

    if(step==STEPS.ACT){
      console.log('3');
    this.subject.next({step, message: opponentName });
    this.setState({step: STEPS.PLAY, opponentName: ''});
    return;
    }
    if (step===STEPS.PLAY && isActive){
      console.log('4');
      this.subject.next({step: STEPS.PLAY, message: question });
      this.setState(prevState=>({question: '', isActive: false, playStory: prevState.playStory.concat({person: 'you', message: prevState.question, timestamp:Date.now()})}));
    }

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
    console.log('here change states');
    console.log('serverMSG', serverMsg);

    const {type, message} = serverMsg;

    if (type===TYPES.GENERAL) {
    this.setState({...message});
  } else {
    const {playStory} = this.state;
    console.log('message', message);
     const newPlayStory =  playStory.concat({...message});
     this.setState({playStory:newPlayStory});
     console.log('newPlayStory', newPlayStory);
  }
  console.log('serverMsg', serverMsg);

  }

  componentWillUnmount() {
    console.log('unmount');
    this.subject.complete();
  }


  render() {
    const { theme, step, opponentName, numberOfPlayers, actions, isActive, question, playStory } = this.state;
    const { children } = this.props;
    const {handleChange, handleButtonClick} = this;
    return children({
      theme,
      step,
      playStory,
      actions: actions || this.createStepMessage(),
      opponentName,
      handleChange,
      numberOfPlayers,
      handleButtonClick,
      isActive,
      question,
    });
  }
}
