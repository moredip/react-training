import React from 'react';
import {connect} from 'react-redux';

import ChannelMessage from './ChannelMessage';
import * as msg from './message';

function mapStateToProps(state){
  return {
    messages: state.channel.messages
  };
}

const mapDispatchToProps = undefined;

export function ChannelHistory(props){
  return (
    <div className="channel-history">
      <h1 className="channel-history__title">Messages</h1>
      {renderMessagesSection(props.messages)}
    </div>
  );
}

function renderMessagesSection(messages){
  if( !messages || messages.length === 0 ){
    return null;
  }

  const messageEls = messages.map( function(message,ix){
    return <ChannelMessage key={ix} message={message}/>;
  });

  return (
    <ul className="channel-history__message-list">
      {messageEls}
    </ul>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(ChannelHistory);
