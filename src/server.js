const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello node');
})
require('dotenv').config();
app.listen(process.env.PORT, () => console.log(process.env.PORT,'포트에서 대기중'));