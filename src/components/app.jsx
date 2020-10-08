import React from 'react';
import ChannelList from '../containers/channel_list';
import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="app d-flex">
       <div className="logo">R</div>
       <ChannelList />
       <MessageList />
    </div>
  );
};

export default App;
