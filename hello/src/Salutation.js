import React from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    greeting: state.greeting
  };
}
const mapDispatchToProps = undefined;

export default connect(mapStateToProps,mapDispatchToProps)(Salutation);
export function Salutation(props){
  return (
    <p className="salutation">{props.greeting}, world.</p>
  );
}

