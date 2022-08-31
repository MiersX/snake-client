let connection;


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    }
    // w Up
    if (key === '\u0077') {
      conn.write("Move: up");
    }
    // s Down
    if (key === '\u0073') {
      conn.write("Move: down");
    }
    // a Left
    if (key === '\u0061') {
      conn.write("Move: left");
    }
    // d Right
    if (key === '\u0064') {
      conn.write("Move: right");
    }
  };
  stdin.on('data', handleUserInput);
  return stdin;
};


module.exports = {
  setupInput,
}