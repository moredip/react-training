import React from 'react';
import {getMessageText} from './message';

export default function ChannelMessage(props){
  return (
    <div className="channel-history__message">
      <span className="channel-history__message-text">{getMessageText(props.message)}</span>
      <span className="channel-history__message-star">&#x02605;</span>
    </div>
  );
}

