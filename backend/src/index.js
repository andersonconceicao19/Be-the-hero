const express = require('express');
const cors= require('cors')
const app = express();
const route = require('./router')
app.use(express.json());
app.use(cors()) // colocando o cors em aberto pois estou em ambiente de desenvolvimento
app.use(route);

app.listen(3333)