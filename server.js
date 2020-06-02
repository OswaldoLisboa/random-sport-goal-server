const express = require('express')
var cors = require('cors')
const fs = require('fs')

const app = express();
app.use(cors())

function retrieveGoal() {
  let data = fs.readFileSync('./data/goals.json');
  goals = JSON.parse(data);
  index = Math.floor(Math.random() * goals.length);
  return goals[index]
}

app.get('/', (req, res) => {
  res.send(retrieveGoal())
})
app.listen(3000);
