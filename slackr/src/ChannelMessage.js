import React from 'react';

export default function ChannelMessage(props){
  return (
    <div className="channel-history__message">
      <span className="channel-history__message-text">{props.message.getText()}</span>
      <span className="channel-history__message-star">&#x02605;</span>
    </div>
  );
}

