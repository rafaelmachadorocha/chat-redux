import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchMessages, displaySpinner } from '../actions';


class ChannelList extends Component {

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.channelFromParams !== nextProps.channelFromParams) {
      this.props.fetchMessages(nextProps.channelFromParams);
      this.props.displaySpinner();
    }
  }

  renderChannel = (channel) => {
    const { channelFromParams } = this.props;
    console.log(channelFromParams)
    return (
      <li
        key={channel}
        className={channel === channelFromParams ? "channel active" : "channel"}
        channel={channel}
      >
        <Link to={`/${channel}`}>
          #{channel}
        </Link>
      </li>
    );
  }

  render() {
    return (
      <div className="channel-list-div">
        <ul className="channel-list">
          {this.props.channelList.map(this.renderChannel)}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
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
