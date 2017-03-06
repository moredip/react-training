import React, {Component} from 'react';

export default class ComposeMessage extends Component {
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
        <input type="text" className="compose-message__input" value={this.state.message} onChange={this.handleInputChange} />
        <input type="submit" value="Send" />
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
