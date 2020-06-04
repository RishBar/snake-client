const IP = 'localhost';
const PORT = 50541;
const directionKeys = {
  up: '\u0077',
  down: '\u0073',
  left: '\u0061',
  right: '\u0064',
};
const messageKeys = {
  g: {letter: '\u0067', message: "Say: Good game comerade"},
  h: {letter: '\u0068', message: "Say: Have fun!"},
  j: {letter: '\u006A', message: "Say: Just Kidding!"},
  k: {letter: '\u006B', message: "Say: Koolio!"},
  l: {letter: '\u006C', message: "Say: Loser!"},
};

module.exports = {
  IP,
  PORT,
  directionKeys,
  messageKeys
};