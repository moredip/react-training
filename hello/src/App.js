import React from 'react';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      includeDate: true
    };
  }

  render(){
    return (
      <div>
        <p>{this.props.greeting}, world.</p>
        <p>The time is {this.formatTime()}</p>
        <button onClick={() => this.handleButtonClick()}>press me</button>
      </div>
    );
  }

  formatTime(){
    if( this.state.includeDate ){
      return this.props.currentTime.toString();
    }else{
      return this.props.currentTime.toTimeString();
    }
  }

  handleButtonClick(){
    this.setState( function(prevState) {
      return {
        includeDate: !prevState.includeDate
      };
    });
  }
}
