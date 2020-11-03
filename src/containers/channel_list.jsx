import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectChannel, fetchMessages, displaySpinner } from '../actions';

class ChannelList extends Component {
  handleClick = (event) => {
    const clickedChannel = event.currentTarget.textContent.replace("#", "");
    this.props.selectChannel(clickedChannel);
    this.props.fetchMessages(this.props.channelFromParams);
    if (this.props.channelFromParams !== clickedChannel) {
      this.props.displaySpinner();
    }
  }

  render() {
    const { channelFromParams } = this.props; 
    return (
      <div className="channel-list">
        {this.props.channelList.map(channel => <p key={channel} className={channel === channelFromParams ? "channel active" : "channel"} channel={channel} onClick={this.handleClick}>#{channel}</p>)}
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
    channelList: state.channelList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
