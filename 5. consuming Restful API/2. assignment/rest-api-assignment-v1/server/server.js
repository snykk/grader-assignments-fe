const cors = require("cors");
const jsonServer = require("json-server");
const server = jsonServer.create();
const photosDb = require("./photosDb.json");
const router = jsonServer.router(photosDb);
const port = 3001;

const middlewares = (req, res, next) => {
  if (req.method === "POST") {
    const { secret } = req.body;
    if (secret === "password") {
      next();
    } else {
      res.status(403).json({ error: "You are not authorized" });
    }
  } else {
    next();
  }
};

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log("JSON Server is running on port: " + port);
});
