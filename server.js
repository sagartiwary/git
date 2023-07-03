const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
 // you can use any port number here; i chose to use 3001

server.use(middlewares);
server.use(router);

server.listen(8080);