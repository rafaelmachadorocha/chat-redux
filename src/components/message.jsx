import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div className="message">
        <p className="header"><span className="author">{this.props.author}</span> - <small className="time">{this.formatTime(this.props.createdAt)}</small></p>
        <p className="content">{this.props.content}</p>
      </div>
    )
  }

  formatTime = (time) => {
    const groups = time.match(/(?:[A-Z])(\d{2})(:\d{2}:\d{2})/);
    let hour = parseInt(groups[1]);
    if (hour <= 2) {
      hour -= (hour - (new Date().getTimezoneOffset() / 60));
    }
    hour = hour - (new Date().getTimezoneOffset() / 60);
    if (hour < 9) {
      return `0${hour}${groups[2]}`;
    }
    return `${hour}${groups[2]}`;
  }
}

export default Message;