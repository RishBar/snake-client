const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write('Name: RBB');
  });
  conn.on('data', message => {
    console.log(`${conn.remoteAddress} says ${message}`);
  });
  return conn;
};

module.exports = { connect };


// conn.stdin.on('data', message => {
//   client.write(message);
// });