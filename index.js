const express = require('express')
const app = express()
const port = 3000

const cors = require("cors");
app.use(cors());

app.get('/api/v1/messages', (req, res) => {
  res.json({
    status : "success",
    message: "GET messages", 
    data: [
            {
              user: "John",
              message: "Hello world"
            },
            {
              user: "Sarah",
              message: "Hello there"
            },
    ]
  })
})


app.get('/api/v1/messages/:id', (req, res) => {
  const messageId = req.params.id;

  res.json({
    status: "succes",
    message: `GETTING message with ID ${messageId}`,
  });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})