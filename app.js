require("dotenv").config();
const jsonServer = require("json-server");
const morgan = require("morgan");

const server = jsonServer.create();

const db = require("./db.json");
const router = jsonServer.router(db);

const middlewares = jsonServer.defaults();
const PORT = process.env.PORT;

server.use(middlewares);
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
