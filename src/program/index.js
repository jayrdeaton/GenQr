let { command, option } = require('termkit'),
  cosmetic = require('cosmetic'),
  { generate } = require('../actions'),
  { printError } = require('../consoleIO');

let program = command('qrgen', '[data]')
  .version(process.env.npm_package_version)
  .description('A cli tool to generate qrcodes')
  .options([

  ])
  .action(async (options) => await generate(options));

module.exports = program;
