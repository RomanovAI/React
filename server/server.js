const express = require('express');
const bodyParser = require("body-parser");
const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('../client'));

function ignoreFavicon(req, res, next) {
    if (req.originalUrl === '/favicon.ico') {
        res.status(204).json({nope: true});
    } else {
        next();
    }
}


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
    console.log("1");
    res.status(200).type('json').json({
        success: true,
        body: data
    })
});


app.post('/test', function (req, res) {
  data = req.body;
  res.send(data);
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.use(ignoreFavicon);