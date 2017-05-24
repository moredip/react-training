import React from 'react';

export default function ChannelHistory(props){
  const message = props.lastMessage 
    ? <p className="channel-history__message">{props.lastMessage}</p>
    : null;

  return (
    <div className="channel-history">
      <h1 className="channel-history__title">Messages</h1>
      {message}
    </div>
  );
}
