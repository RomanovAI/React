const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('../client'));

let data = [
    {
        name:"Rome",
        id:1
    },
    {
        name:"Begin",
        id:2
    }
];


app.get('/test', function (req, res) {
  res.send(data);
});

app.post('/test', function (req, res) {
  data = req.body;
  res.send(data);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
