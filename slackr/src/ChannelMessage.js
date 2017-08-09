import React from 'react';

import * as msg from './message';

export default function ChannelMessage({message,onDelete}){
  return (
    <div className="channel-message">
      <span className="channel-message__text">
        {msg.getText(message)}
      </span>
      <span onClick={onDelete} className="channel-message__delete">
        x
      </span>
    </div>
  );
}
