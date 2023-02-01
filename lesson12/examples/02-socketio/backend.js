const http = require("http");
const { Server } = require("socket.io");

const httpServer = http.createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (ws) => {
  console.log("new client connected");

  // ws.emit("chatMessage", "Welcome to chat");
  // ws.broadcast.emit("chatMessage", "New user connected");

  ws.on("chatMessage", (message) => {
    ws.broadcast.emit("chatMessage", message);
  });
});

httpServer.listen(5000, () => {
  console.log("listening on port 5000");
});
