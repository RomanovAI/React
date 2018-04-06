﻿const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const uuidv1 = require('uuid/v1');



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
        name:"Остров",
        id:uuidv1(),
        description: "Во время Великой Отечественной войны немцы захватывают угольную баржу где-то у берегов Белого моря. " +
        "Матрос Анатолий под угрозой смерти предает и убивает своего командира, капитана корабля Тихона. " +
        "Несмотря на это, немцы взрывают баржу и оставляют Анатолия умирать в море. Выжившего Анатолия мы " +
        "находим через четверть века иноком при монастыре. Постаревший до неузнаваемости Анатолий трудится истопником. " +
        "Он спит на углях в котельной, молится отдельно от всех и распевает во все горло песни."
    },
    {
        name:"Начало",
        id:uuidv1(),
        description: "Сюжет фильма Начало развивается в будущем, когда люди научились распознавать сны" +
        " и использовать их в своих целях. Доминик Кобб, профессиональный вор, но Кобб необычный вор," +
        " его специализация - кража мыслей и идей человека когда последний спит. Доминик виртуозно ворует" +
        " уникальные идеи у спящего человека, внедряясь в его сон...Но такой образ жизни предполагает под" +
        " собой постоянное гонение властей и вот в один момент сами власти дают Коббу шанс на исправление" +
        ", но взамен Доминик должен сделать одну услугу. Кобб должен проникнуть в сон человека и внедрить" +
        " в сознание последнего дезинформацию, другими словами заставить человека поверить в ложную информацию."
    }
];



app.get('/test', function (req, res) {
    console.log("1");
    res.status(200).type('json').json({
        body: data
    })
});

app.post('/test', function (req, res) {
   data = req.body;
    res.status(200).type('json').json({
        body: data
    });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.use(ignoreFavicon);