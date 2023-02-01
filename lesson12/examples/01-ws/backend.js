const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({
  port: 5000,
});

const clients = [];

wss.on("connection", (ws) => {
  console.log("new client connected");
  clients.push(ws);

  for (const client of clients) {
    if (client === ws) {
      client.send("Welcome to chat!");
    } else {
      client.send("New user connected" + new Date());
    }
  }

  ws.on("message", (message) => {
    console.log("<-", message.toString());
  });

  setInterval(() => {
    ws.send("ping");
  }, 1000);
});

console.log("listening on port 5000");
