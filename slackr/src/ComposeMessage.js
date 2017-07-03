import React, {Component} from 'react';
import {connect} from 'react-redux';

import stateful from './stateful';
import {postMessage} from './ducks/channel';

const mapStateToProps = undefined;
const mapDispatchToProps = {
  onMessage: postMessage
};
 
const ComposeMessage = stateful(
  {
    displayName: 'ComposeMessage',
    initialState: { message: '' }
  },
  function ({props,state,setState}) {
    function handleInputChange(event){
      const message = event.target.value;
      setState({message});
    }

    function handleSubmit(event){
      event.preventDefault();

      if( props.onMessage ){
        props.onMessage(state.message);
      }

      setState({
        message:''
      });
    }

    return (
      <form className="compose-message" onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="compose-message__input" 
          value={state.message} 
          onChange={handleInputChange} 
          placeholder="write a message"
        />
        <input 
          type="submit" 
          className="compose-message__submit" 
          value="Send" 
        />
      </form>
    );
  }
);

export class ComposeMessage__ extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){
    return (
      <form className="compose-message" onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          className="compose-message__input" 
          value={this.state.message} 
          onChange={this.handleInputChange} 
          placeholder="write a message"
        />
        <input 
          type="submit" 
          className="compose-message__submit" 
          value="Send" 
        />
      </form>
    );
  }

  handleInputChange(event){
    const message = event.target.value;
    this.setState({message});
  }

  handleSubmit(event){
    event.preventDefault();

    if( this.props.onMessage ){
      this.props.onMessage(this.state.message);
    }

    this.setState({
      message:''
    });
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ComposeMessage);
