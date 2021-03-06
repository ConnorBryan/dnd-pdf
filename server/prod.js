const fs = require("fs");
const https = require("https");
const WebSocket = require("ws");
const game = require("./game");

const cert = fs.readFileSync("server/server.cert", "utf8");
const key = fs.readFileSync("server/server.key", "utf8");
const server = https.createServer({
  cert,
  key
});
const wsServer = new WebSocket.Server({ server });
const connectedSockets = [];

let activeGame = game;

wsServer.on("connection", socket => {
  connectedSockets.push(socket);

  socket.on("message", message => {
    message = JSON.parse(message);

    switch (message.type) {
      case "UPDATE_GAME":
        activeGame = message.payload;

        fs.writeFile(
          "./data.json",
          JSON.stringify(activeGame, null, 2),
          err => {
            err
              ? console.error("Failed to save game", err)
              : console.info("Game saved!");
          }
        );

        connectedSockets.forEach(socket =>
          socket.send(JSON.stringify(activeGame))
        );
        break;
      case "SEND_GAME":
        socket.send(JSON.stringify(activeGame));
        break;
      default:
        break;
    }
  });

  socket.on("close", () => {
    connectedSockets.splice(connectedSockets.indexOf(socket), 1);
  });
});

server.listen(9000);
