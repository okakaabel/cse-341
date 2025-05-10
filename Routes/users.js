const express = require('express');
const routes = require('express').Router();

const usersControllers = require('../controllers/users');
const  Routes  = require('.');

routes.get ('/', usersControllers.getAll);
routes.get ('/:id', usersControllers.getSingle);

module.exports = routes;