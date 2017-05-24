import React from 'react';

export default function ChannelHistory(props){
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
    return <p key={ix} className="channel-history__message">{message}</p>;
  });

  return (
    <ul className="channel-history__message-list">
      {messageEls}
    </ul>
  );
}
