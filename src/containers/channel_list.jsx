import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectChannel, fetchMessages, displaySpinner, hideSpinner } from '../actions';

class ChannelList extends Component {
  handleClick = (event) => {
    this.props.selectChannel(event.currentTarget.textContent.replace("#", ""));
    this.props.displaySpinner();
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    return (
      <div className="channel-list">
       {this.props.channelList.map(channel => <p key={channel} className={channel === this.props.selectedChannel ? "channel active" : "channel"} channel={channel} onClick={this.handleClick}>#{channel}</p>)}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectChannel: selectChannel,
    fetchMessages: fetchMessages,
    displaySpinner: displaySpinner,
    hideSpinner: hideSpinner
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    channelList: state.channelList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
