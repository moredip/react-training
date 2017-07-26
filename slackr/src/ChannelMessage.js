import React from 'react';
import classnames from 'classnames';
import {getMessageText,getMessageStarState} from './message';

export default function ChannelMessage({message,onStarClicked}){

  const starClassNames = classnames(
    "channel-history__message-star",
    starCssModifierForMessage(message)
  );

  return (
    <div className="channel-history__message">
      <span className="channel-history__message-text">
        {getMessageText(message)}
    </span>
      <span 
        onClick={()=>onStarClicked()}
        className={starClassNames}
      >
        &#x02605;
      </span>
    </div>
  );
}

function starCssModifierForMessage(message){
  switch( getMessageStarState(message) ){
    case 'starring': 
      return '-starring';
    case 'starred': 
      return '-starred';
    default:
      return null;
  }
}
