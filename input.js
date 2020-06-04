const { IP, PORT, directionKeys, messageKeys } = require('./constants');

let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === directionKeys['up']) {
    connection.write("Move: up");
  } else if (key === directionKeys['down']) {
    connection.write("Move: down");
  } else if (key === directionKeys['right']) {
    connection.write("Move: right");
  } else if (key === directionKeys['left']) {
    connection.write("Move: left");
  } else if (key === messageKeys['g']['letter']) {
    connection.write(messageKeys['g']['message']);
  } else if (key === messageKeys['h']['letter']) {
    connection.write(messageKeys['h']['message']);
  } else if (key === messageKeys['j']['letter']) {
    connection.write(messageKeys['j']['message']);
  } else if (key === messageKeys['k']['letter']) {
    connection.write(messageKeys['k']['message']);
  } else if (key === messageKeys['l']['letter']) {
    connection.write(messageKeys['l']['message']);
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  return stdin;
};

module.exports = { setupInput };