
const net = require('net');
const {IP, PORT} = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Successfully connected to the game server m8");
  });

  conn.on('connect', () => {
    conn.write("Name: MXM");
     
  });

  conn.on('connect', () => {

/*
conn.write("Move: up");

setInterval(() => {
  conn.write("Move: up");
}, 50)
*/
  });

  conn.on("data", (message) => {
    console.log(message);
  });



  return conn

};


module.exports = {
  connect,
};