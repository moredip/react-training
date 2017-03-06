import React from 'react';

export default function ChannelHistory(props){
  const messageList = props.messages.map( function(message,ix){
    return <div key={ix} className="channel-history__message">{message}</div>;
  });

  return (
    <div className="channel-history">
      {messageList}
    </div>
  );
}
