let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === '\u0077') {
    connection.write("Move: up");
  } else if (key === '\u0073') {
    connection.write("Move: down");
  } else if (key === '\u0061') {
    connection.write("Move: left");
  } else if (key === '\u0064') {
    connection.write("Move: right");
  } else if (key === '\u0067') {
    connection.write("Say: Good game comerade");
  } else if (key === '\u0068') {
    connection.write("Say: Have fun!");
  } else if (key === '\u006A') {
    connection.write("Say: Just Kidding!");
  } else if (key === '\u006B') {
    connection.write("Say: Koolio!");
  } else if (key === '\u006C') {
    connection.write("Say: Loser!");
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