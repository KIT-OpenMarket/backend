require('dotenv').config();
const express = require('express');
const dbConnect = require('./config/Mongodb/dbInit');
const app = express();
const bodyParser = require('body-parser');
app.get('/', (req, res) => {
    res.send('hello node');
});

app.set('port', process.env.PORT);



dbConnect();

app.listen(process.env.PORT, () => console.log(process.env.PORT,'포트에서 대기중'));

app.use(bodyParser.json());

app.use((req,res,next)=> {
    console.log(req.body);
    res.writeHead(200);
    res.end();
    next();
});
