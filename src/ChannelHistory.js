import React from 'react';

export default function ChannelHistory(props){
  const messageItems = props.messages.map( function(message,ix){
    return <li key={ix} className="channel-history__message">{message}</li>;
  });

  return (
    <div className="channel-history">
      <h1 className="channel-history__title">Messages</h1>
      <ul>{messageItems}</ul>
    </div>
  );
}
