import express from "express";
import bodyParser from "body-parser";
import cuid from "cuid";

const app = express();

app.use(bodyParser.json());

app.get("/", (_, res) => {
  res.send(JSON.stringify("Task 1 berhasil!"));
});

app.patch("/task2", (_, res) => {
  res.send(JSON.stringify(cuid()));
});

app.post("/task3", (req, res) => {
  if (req.query.user_id !== "3") {
    res.status(400).send("user_id is not 3");
    return;
  }

  if (req.query.role !== "admin") {
    res.status(400).send("role is not admin", 400);
    return;
  }

  res.send(JSON.stringify("Task 3 berhasil!"));
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

app.post("/task4", (req, res) => {
  if (req.body.username !== "admin") {
    res.status(400).send("username is not admin");
    return;
  }

  if (req.body.password !== "password") {
    res.status(400).send("password is not password");
    return;
  }

  res.send(JSON.stringify("Task 4 berhasil!"));
});
