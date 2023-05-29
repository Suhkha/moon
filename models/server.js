const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = require("http").createServer(this.app);
    this.io = require("socket.io")(this.server);

    this.paths = {};

    //middleware
    this.middlewares();

    //routes
    this.routes();

    //Sockets config
    this.sockets();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.static("public"));
  }

  routes() {}

  sockets() {
    this.io.on("connection", (socket) => {
      console.log("connect", socket.id);

      socket.on("disconnect", () => {
        console.log("disconnect", socket.id);
      });

      socket.on("send-message", (payload) => {
        console.log(payload);
      });
    });
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`);
    });
  }
}

module.exports = Server;
