
const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Successfully connected to the game server m8");
  });

  conn.on('connect', () => {
    conn.write("Name: MXM");
  });

  conn.on("data", (message) => {
    console.log(message);
  });



  return conn

};


module.exports = {
  connect,
};