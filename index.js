#!/usr/bin/env node

let { consoleIO, program } = require('./src'),
  { printError, readline } = consoleIO,
  command;

let run = async(args) => {
  command = args[2];
  try {
    await program.parse(args);
  } catch(err) {
    printError(err);
  };
  process.exit();
};

process.on('exit', () => {
  readline.close();
  process.stdin.destroy();
});

run(process.argv);
