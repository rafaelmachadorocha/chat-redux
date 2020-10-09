import React, { Component } from 'react';

class Message extends Component {
  render() {
    const color = this.intToRGB(this.hashCode(this.props.author))
    return (
      <div className="message">
        <p className="header"><span className="author" style={{color: `#${color}`}}>{this.props.author}</span> - <small className="time">{this.formatTime(this.props.createdAt)}</small></p>
        <p className="content">{this.props.content}</p>
      </div>
    )
  }

  hashCode = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      // eslint-disable-next-line no-bitwise
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

  intToRGB = (i) => {
    let c = (i & 0x00FFFFFF).toString(16).toUpperCase();
    return "00000".substring(0, 6 - c.length) + c;
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