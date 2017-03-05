import React from 'react';
import './App.css';

import ChannelHistory from './ChannelHistory';
import ComposeMessage from './ComposeMessage';

export default function App(){
  return (
    <div className="app-layout">
      <ChannelHistory/> 
      <ComposeMessage/> 
    </div>
  );
}
