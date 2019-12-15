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
    isActive: false,
    isShowYoNButtons: false,
    question: '',
    winners: [],
    personPlace: null,
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

  handleButtonClick = (event) => {
    const {opponentName, theme, step, question, isActive, isShowYoNButtons} = this.state;
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
      this.setState(prevState=>({question: '', playStory: prevState.playStory.concat({person: 'you', message: prevState.question, timestamp:Date.now()})}));
    }
    if (step===STEPS.PLAY && isShowYoNButtons){
      console.log('5');
      console.log('event.currentTarget.dataset.name', event.currentTarget.dataset.name);
      const newMessage = event.currentTarget.dataset.name;
      this.subject.next({step: STEPS.PLAY, message: newMessage });
      this.setState(prevState=>({isShowYoNButtons: false, playStory: prevState.playStory.concat({person: 'you', message: newMessage, timestamp:Date.now()})}));
    }

  }

  createStepMessage = () => {
    const {step, actions, numberOfPlayers} = this.state;
    console.log('here');
    if (actions){
      return actions
    }
    if(step===STEPS.START && numberOfPlayers<2) {
      return ACTION_MESSAGES.NOT_ENOUGH_PLAYERS
    }
    if (step===STEPS.START) {
      return ACTION_MESSAGES.START
    }
    if (step===STEPS.PLAY && !actions){
      return ACTION_MESSAGES.WAIT_START
    }
  }

  changeStateAccordingServerMessage = (serverMsg) => {
    console.log('here change states');
    console.log('serverMSG', serverMsg);

    const {type, message} = serverMsg;

    if (type===TYPES.GENERAL) {
    this.setState({...message, isShowYoNButtons: message.actions===ACTION_MESSAGES.ANSWER});
    }
    if (type===TYPES.ADDITIONAL){
    const {playStory} = this.state;
    console.log('message', message);
     const newPlayStory =  playStory.concat({...message});
     this.setState({playStory:newPlayStory});
     console.log('newPlayStory', newPlayStory);
    }
    if(type===TYPES.FINAL){
      const {winners} = this.state;
    console.log('message in Final', message);
    this.setState({
      winners:winners.concat(JSON.parse(message.placeRating)),
      personPlace: message.personPlace,
      step: STEPS.END});
    }
  }

  componentWillUnmount() {
    console.log('unmount');
    this.subject.complete();
  }


  render() {
    const { theme, step, opponentName, personPlace, numberOfPlayers, isShowYoNButtons,isActive, question, playStory, winners } = this.state;
    const { children } = this.props;
    const {handleChange, handleButtonClick} = this;
    return children({
      theme,
      step,
      playStory,
      actions: this.createStepMessage(),
      opponentName,
      handleChange,
      numberOfPlayers,
      handleButtonClick,
      isActive,
      question,
      isShowYoNButtons,
      winners,
      personPlace
    });
  }
}
