require('dotenv').config();
const express = require('express');
const dbConnect = require('./config/Mongodb/dbInit');
const app = express();
const bodyParser = require('body-parser');
const userDAO = require('./domain/DAO/users');
app.get('/', (req, res) => {
    res.send('hello node');
});

app.set('port', process.env.PORT);



dbConnect();

app.listen(process.env.PORT, () => console.log(process.env.PORT,'포트에서 대기중'));

app.use(bodyParser.json());


let userData = {
    user_id : "test1",
    name : "test",
    age : "1",
    sex : "여자",
    nickname : "testtest",
    phone_num : "01012345678"
};

userDAO.UserModify(userData);

app.use((req,res,next)=> {
    console.log(req.body);
    res.writeHead(200);
    res.end();
    next();
});
