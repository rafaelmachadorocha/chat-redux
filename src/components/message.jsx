import React, { Component } from 'react';

class Message extends Component {

  hashCode = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      // eslint-disable-next-line no-bitwise
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

  intToRGB = (i) => {
    // eslint-disable-next-line no-bitwise
    const c = (i & 0x00FFFFFF).toString(16).toUpperCase();
    return "00000".substring(0, 6 - c.length) + c;
  }

  formatTime = (time) => {
    const groups = time.match(/(?:[A-Z])(\d{2})(:\d{2}:\d{2})/);
    let hour = Number.parseInt(groups[1], 10);
    const timeZone = new Date().getTimezoneOffset() / 60
    if (timeZone >= 0 && hour - timeZone < 0) {
      hour = 24 + (hour - timeZone);
    } else if (timeZone <= 0 && hour - timeZone >= 24) {
      hour = (hour - timeZone) % 24;
    } else {
      hour -= timeZone;
    }
    if (hour <= 9) {
      return `0${hour}${groups[2]}`;
    }
    return `${hour}${groups[2]}`;
  }

  render() {
    const color = this.intToRGB(this.hashCode(this.props.author));
    const { author, createdAt, content } = this.props;
    return (
      <div className="message">
        <p className="header"><span className="author" style={{ color: `#${color}` }}>{author}</span> - <small className="time">{this.formatTime(createdAt)}</small></p>
        <p className="content">{content}</p>
      </div>
    );
  }
}

export default Message;
