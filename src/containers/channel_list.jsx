import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectChannel, fetchMessages, displaySpinner } from '../actions';

class ChannelList extends Component {
  handleClick = (event) => {
    const clickedChannel = event.currentTarget.textContent.replace("#", "");
    this.props.selectChannel(clickedChannel);
    this.props.fetchMessages(this.props.selectedChannel);
    if (this.props.selectedChannel !== clickedChannel) {
      this.props.displaySpinner();
    }
  }

  render() {
    const { selectedChannel } = this.props; 
    return (
      <div className="channel-list">
        {this.props.channelList.map(channel => <p key={channel} className={channel === selectedChannel ? "channel active" : "channel"} channel={channel} onClick={this.handleClick}>#{channel}</p>)}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectChannel,
    fetchMessages,
    displaySpinner,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    channelList: state.channelList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
