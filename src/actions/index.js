// TODO: add and export your own actions
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const POST_MESSAGES = 'POST_MESSAGES';
export const SET_CHANNELS = 'SET_CHANNELS';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const SET_USER = 'SET_USER';
export const DISPLAY_SPINNER = 'DISPLAY_SPINNER'
export const HIDE_SPINNER = 'HIDE_SPINNER'

export function fetchMessages(channel) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const promise = fetch(url).then(response => response.json());
  return {
    type: FETCH_MESSAGES,
    payload: promise
  };
}

export function postMessage(channel, author, content) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const body = { channel, author, content };
  const promise = fetch(url,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(response => response.json());

  return {
    type: POST_MESSAGES,
    payload: promise
  };
}

export function setChannels() {
  return {
    type: SET_CHANNELS,
    payload: ['general', 'react', 'brazil']
  }
}

export function selectChannel(channel) {
  return {
    type: SELECT_CHANNEL,
    payload: channel
  }
}

export function setUserName(userName) {
  return {
    type: SET_USER,
    payload: userName
  }
}

export function displaySpinner() {
  return {
    type: DISPLAY_SPINNER,
    payload: true
  }
}

export function hideSpinner() {
  return {
    type: HIDE_SPINNER,
    payload: false
  }
}

