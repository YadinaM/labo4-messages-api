const express = require('express')
const app = express()
const port = 3000

const cors = require("cors");
app.use(cors());

app.get('/api/v1/messages', (req, res) => {
  res.json({
    status : "success",
    message: "GET messages", 
    data: [{
      //als data een paar messages verzinnen,
    }]
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})