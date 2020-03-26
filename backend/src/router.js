const express = require('express');
const ongController = require('./controllers/ongController')
const incidentsController = require('./controllers/incidentController')
const sessionController = require('./controllers/sessionController')

const routers = express.Router();


routers.get('/ongs', ongController.index)
routers.post('/ongs', ongController.create)

routers.get('/profile', incidentsController.listforOngs)

routers.post('/session', sessionController.create)

routers.get('/incidents', incidentsController.index)
routers.post('/incidents', incidentsController.create)
routers.delete('/incidents/:id', incidentsController.delete)

module.exports = routers;