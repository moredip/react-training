import React, {Component} from 'react';
import './App.css';

import ChannelHistory from './ChannelHistory';
import ComposeMessage from './ComposeMessage';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      lastMessage: null
    };

    this.handleNewMessage = this.handleNewMessage.bind(this);
  }

  render(){
    return (
      <div className="app-layout">
        <ChannelHistory lastMessage={this.state.lastMessage}/> 
        <ComposeMessage onMessage={this.handleNewMessage}/> 
      </div>
    );
  }

  handleNewMessage(newMessage){
    this.setState( (prevState)=> addMessageToState(prevState,newMessage) );
  }

  componentWillUpdate(nextProps, nextState){
    console.log('APP STATE', nextState);
  }
}

function addMessageToState(state,newMessage){
  return {
    lastMessage: newMessage
  };
}

