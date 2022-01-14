// imports all file except index.js
const req = require.context('.', true, /^(?!.\/index)/);

req.keys().forEach(key => {
  const regex = /^.+\/([^/]+)\/(.*?).jsx$/;
  const matchName = key.match(regex);
  if (matchName) {
    const fileName = matchName[matchName.length - 1];

    if (req(key).default) {
      module.exports[fileName] = req(key).default;
    }
  }
});
