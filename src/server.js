require('dotenv').config();
const express = require('express');
const dbConnect = require('./config/Mongodb/dbInit');
const app = express();
var step1 = require('./router/User/join');
var step2 = require('./routes/User/login');

app.use('/Users', step1, step2);

app.get('/', (req, res) => {
    res.send('hello node');
});

app.set('port', process.env.PORT);


dbConnect();

app.listen(process.env.PORT, () => console.log(process.env.PORT,'포트에서 대기중'));

app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body);
});

app.use((req,res,next)=> {
    console.log(req);
    res.writeHead(200);
    res.end();
    next();
});
