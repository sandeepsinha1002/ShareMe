const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const app =express();
const path = require('path');
const DbConnect = require('./config/db');
DbConnect();
PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser')
app.use(bodyParser.json());

app.use('/api/files',require('./routes/files'));
app.use('/files',require('./routes/show'));
app.use('/files/download',require('./routes/download'))

app.use(express.static('public'))

app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})