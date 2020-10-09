import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchMessages, hideSpinner } from '../actions';
import Message from '../components/message';

class MessageList extends Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.containerRef = React.createRef();
  }

  UNSAFE_componentWillMount() {
    this.props.fetchMessages(this.props.selectedChannel);
  }


  componentDidMount = () => {
    this.containerRef.current.scrollTop = this.containerRef.current.scrollHeight;
    return setInterval(() => {
      this.props.fetchMessages(this.props.selectedChannel);
    }, 2000);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.messageList.messages) {
      if (this.props.messageList.messages.length === nextProps.messageList.messages.length
        && this.props.messageList.channel === nextProps.messageList.channel) {
        return false;
      }
    }
    return true;
  }


  componentDidUpdate() { 
    this.containerRef.current.scrollTop = this.containerRef.current.scrollHeight;
    this.props.hideSpinner();
  }

  componentWillUnmount() {
    clearInterval(this.componentDidMount());
  }

  render() {
    if (this.props.messageList.messages) {
      return (
        <div className="message-list" ref={this.containerRef}>
          {this.props.messageList.messages.map( ({ id, author, content, created_at }) => <Message key={id} author={author} content={content} createdAt={created_at} />)}
        </div>
      );
    } 
    return ( 
      <div className="message-list" ref={this.containerRef}>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchMessages: fetchMessages,
    hideSpinner: hideSpinner
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    messageList: state.messageList,
    selectedChannel: state.selectedChannel
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
