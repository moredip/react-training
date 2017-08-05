import React, {Component} from 'react';
import './App.css';

import ChannelHistory from './ChannelHistory';
import ComposeMessage from './ComposeMessage';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: []
    };

    this.handleNewMessage = this.handleNewMessage.bind(this);
  }

  render(){
    return (
      <div className="app-layout">
        <ChannelHistory messages={this.state.messages}/> 
        <ComposeMessage onMessage={this.handleNewMessage}/> 
      </div>
    );
  }

  handleNewMessage(newMessage){
    this.setState( (prevState)=> addMessageToState(prevState,newMessage) );
  }
}

function addMessageToState(state,newMessage){
  return {
    messages: state.messages.concat([newMessage])
  };
}

