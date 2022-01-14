import {
  all,
    call,
    spawn,
  } from 'redux-saga/effects';
  
  export const delay = ms => new Promise(res => setTimeout(res, ms));
  
  // imports all file except index.js
  const req = require.context('.', true, /^(?!.\/saga|sagas)/);
  
  const sagas = [];
  
  req.keys().forEach(key => {
    if (req(key).default) {
      if (!sagas.find(saga => saga === req(key).default)) {
        sagas.push(req(key).default);
      }
    }
  });
  
  const makeRestartable = saga => (
    spawn(function* spawnFunc() {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          console.error('Saga error, the saga will be restarted', e);
        }
      }
    })
  );
  
  export default function* root() {
    yield all(sagas.map(saga => makeRestartable(saga)));
  }
  