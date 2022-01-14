import { combineReducers } from 'redux';

// imports all file except index.js
const req = require.context('.', true, /^(?!.\/index|store)/);

const modules = { };

req.keys().forEach(key => {
  const regex = /^.+\/([^/]+)\/(.*?).js$/;
  const matchName = key.match(regex);
  if (matchName) {
    const moduleName = matchName[matchName.length - 1];

    if (req(key).default) {
      modules[moduleName] = req(key).default;
    }
  }
});

export default combineReducers(modules);
