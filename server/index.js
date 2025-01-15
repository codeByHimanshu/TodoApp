const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { createTodo, updateTodo } = require("./models/todoSchema");
const { todo } = require("./config/db");
const cors = require('cors');
app.use(cors());
dotenv.config();
app.use(express.json());

app.get("/get", async function (req, res) {
  const todos = await todo.find({ });
  res.json(todos);
});

app.post("/create", async function (req, res) {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) { 
    res.status(404).json({
      msg: "invalid inputs are provided",
    });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: "todo created",
  });
});

app.put("/update", async function (req, res) {
  const updatePayload = req.body;
  const parsepayload = updateTodo.safeParse(updatePayload);
  if (!parsepayload.success) {
    res.status(404).json({
      msg: "invali inputs are provided",
    });
    return;
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.status(200).json({
    msg: "todo updated",
  });
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on the port ${port}`);
});
