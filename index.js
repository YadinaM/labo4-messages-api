const express = require('express')
const app = express()
const port = 3000

const cors = require("cors");
app.use(cors());



app.get('/api/v1/messages/:id', (req, res) => {
  const messageId = req.params.id;

  res.json({
    status: "succes",
    message: `GETTING message with ID ${messageId}`,
  });
});

app.post("/api/v1/messages", (req, res) => {
  let user = req.body.message.user;

  res.json({
    status: "success",
    message: `POST a new message for user ${user}`,
  });
});

app.put('/api/v1/messages/:id', (req, res) => {
  const messageId = req.params.id;

  res.json({
    message: `UPDATING a message with id ${messageId}`
  });
});

app.delete('/api/v1/messages/:id', (req, res) => {
  const messageId = req.params.id;

  res.json({
    message: `DELETING a message with id ${messageId}`
  });
});

app.get('/api/v1/messages', (req, res) => {
  const username = req.query.user;

  if (username) {
    res.json({
      status: "success",
      message: `GET messages for username ${username}`,
    });
  } else {
    res.json({
      status: "success",
      message: "GET messages",
      data: [
        {
          user: "John",
          message: "Hello world",
        },
        {
          user: "Sarah",
          message: "Hello there",
        },
      ],
    });
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})