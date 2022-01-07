require('dotenv').config();
const express = require('express');
const dbConnect = require('./config/Mongodb/dbInit');
const app = express();

app.get('/', (req, res) => {
    res.send('hello node');
});
dbConnect();

app.listen(process.env.PORT, () => console.log(process.env.PORT,'포트에서 대기중'));