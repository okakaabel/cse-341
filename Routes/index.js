const routes = require('express').Router();
const week1Controller = require('../controllers/week1');
 
routes.get('/', week1Controller.AmmonRoute);

routes.get('/Ashely', week1Controller.AshelyRoute);

routes.get('/Angel', week1Controller.AngelRoute);

module.exports = routes;