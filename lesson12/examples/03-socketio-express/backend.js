const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const httpServer = http.createServer(app);
const io = new Server(httpServer);

io.on("connection", (ws) => {
  console.log("new client connected");

  // ws.emit("chatMessage", "Welcome to chat");
  // ws.broadcast.emit("chatMessage", "New user connected");

  ws.on("chatMessage", (message) => {
    ws.broadcast.emit("chatMessage", message);
  });
});

app.get("/", (req, res, next) => {
  return res.sendFile(__dirname + "/index.html");
});

const { PORT = 5001 } = process.env;

httpServer.listen(PORT, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("listening on port 5001");
});
