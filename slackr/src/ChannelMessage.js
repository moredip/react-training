import React from 'react';

import * as msg from './message';

export default function ChannelMessage({message}){
  return (
    <div>
      <span className="channel-message__text">
        {msg.getText(message)}
      </span>
    </div>
  );
}
