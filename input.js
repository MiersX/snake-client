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
    };
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
    if (key === '\u0031') {
      conn.write("Say: GitGud")
    }
    if (key === '\u0032') {
      conn.write("Say: SSSSS")
    }
    if (key === '\u0033') {
      conn.write("Say: Hai")
    }
    if (key === '\u0034') {
      conn.write("Say: byee")
    }
  };
  stdin.on('data', handleUserInput);
  return stdin;
};


module.exports = {
  setupInput,
}