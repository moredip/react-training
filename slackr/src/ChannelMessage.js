import React from 'react';

export default function ChannelMessage({message,onDelete}){
  return (
    <div className="channel-message">
      <span className="channel-message__text">
        {message}
      </span>
      <span onClick={onDelete} className="channel-message__delete">
        x
      </span>
    </div>
  );
}
