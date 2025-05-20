const express = require('express');
const routes = require('express').Router();

const usersControllers = require('../controllers/users');
const  Routes  = require('.').default;

routes.post('/', usersControllers.createUser);
routes.put ('/:id', usersControllers.updateUser);
routes.delete ('/:id', usersControllers.deleteUser);

routes.get ('/', usersControllers.getAll);
routes.get ('/:id', usersControllers.getSingle);

module.exports = routes;