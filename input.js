let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === '\u0077') {
    setInterval(() => {
      connection.write("Move: up");
    }, 150);
  } else if (key === '\u0073') {
    setInterval(() => {
      connection.write("Move: down");
    }, 150);
  } else if (key === '\u0061') {
    setInterval(() => {
      connection.write("Move: left");
    }, 150);
  } else if (key === '\u0064') {
    setInterval(() => {
      connection.write("Move: right");
    }, 150);
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