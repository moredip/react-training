import React from 'react';

export default function Salutation(props){
  return (
    <p>{props.greeting||'Hello'}, world</p>
  );
}
