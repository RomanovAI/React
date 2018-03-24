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

console.log("массив на сервере", data);

app.get('/test', function (req, res) {
    console.log("1");
    res.status(200).type('json').json({
        success: true,
        body: data
    })
});


app.post('/test', function (req, res) {
    console.log("2");
  let dataReq = req.body;
  console.log("до парсинга: ",dataReq);
  for (let i in dataReq) {
      JSON.parse(i);
      console.log("после парсинга: ", i );
      console.log("#1 - i.id: ",i.id);
      console.log("data.length: ",data.length);
      data.splice(0,data.length,i);
 /*     let newArr = data.filter(item =>{
          console.log("item.id :",item.id);
          console.log("#2 - i.id: ",i.id);
          item.id ===i.id
      });
      console.log("массив после фильтра: ", newArr);*/
      res.status(200).type('json').json({
          success: true,
          body: data
      });
      console.log("новый массив: ", data );
  }
  res.send(data);
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.use(ignoreFavicon);