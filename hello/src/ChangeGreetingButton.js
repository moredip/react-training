import React from 'react';
import {connect} from 'react-redux';

const CHANGE_GREETING_ACTION = {
  type: 'CHANGE_GREETING'
};

const mapStateToProps = undefined;
function mapDispatchToProps(dispatch) {
  return {
    onChangeGreeting(event){
      dispatch(CHANGE_GREETING_ACTION);
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ChangeGreetingButton);

export function ChangeGreetingButton(props){
  return (
    <button className="change-greeting-button" onClick={props.onChangeGreeting}>Change greeting</button>
  );
}

