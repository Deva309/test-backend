const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

let todos = [];

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.json(newTodo);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});