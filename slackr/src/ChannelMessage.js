import React from 'react';
import classnames from 'classnames';

import * as msg from './message';

export default function ChannelMessage({message,onDelete}){
  const messageClassName = classnames(
    'channel-message',
    `-${msg.getState(message)}-state`
  );
  return (
    <div className={messageClassName}>
      <span className="channel-message__text">
        {msg.getText(message)}
      </span>
      <span onClick={onDelete} className="channel-message__delete">
        x
      </span>
    </div>
  );
}
