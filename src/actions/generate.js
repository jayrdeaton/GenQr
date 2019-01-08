const qrcode = require('qrcode-terminal'),
  { prompt } = require('../consoleIO');

module.exports = async (options) => {
  let { data } = options;
  if (!data) data = await prompt();
  qrcode.generate(data);
};
