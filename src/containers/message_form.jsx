import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { postMessage } from '../actions';

class MessageForm extends Component {

  constructor(props) {
    super(props)
    this.textAreaRef = React.createRef();
  }

  submitForm = (event) => {
    event.preventDefault();
    this.props.postMessage(this.props.selectedChannel, this.props.userName, this.textAreaRef.current.value);
    this.textAreaRef.current.value = "";
    this.textAreaRef.current.focus();
  }

  submitFormWithKeyDown = (event) => { 
    if (event.charCode === 13 && !event.shiftKey) {
      event.preventDefault();
      this.props.postMessage(this.props.selectedChannel, this.props.userName, this.textAreaRef.current.value);
      this.textAreaRef.current.value = "";
      this.textAreaRef.current.focus();
    }
  }

  render() { 
    return (
      <form className="message-form">
        <textarea ref={this.textAreaRef} onKeyPress={this.submitFormWithKeyDown} tabIndex="0" />
        <input type="submit" value="Send" onClick={this.submitForm} className="btn btn-send" />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    postMessage: postMessage
  }, dispatch)
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    userName: state.userName
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);