const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('../models/user');

// HELPER FUNCTIONS
const {
  isLoggedIn,
  isNotLoggedIn,
  validationLoggin,
} = require('../helpers/middlewares');

// GET '/auth/me'
//  - check if the user IS logged in using helper function (check if session exists)
//  - if yes, send the response with user info (available on req.session.currentUser)

// POST '/auth/login'
//  - check that user is NOT logged in - using helper function (check if req.session.currentUser exists)
//  - check that `password` and `username` are sent - using helper function
//  - check if user exists in the DB
//  - if user doesn't exist - forward the error to the error middleware using `next()`
//  - if user exists get assign the user document to `req.session.currentUser` and then send  json response

// POST '/auth/signup'
//  - check that user is NOT logged in - using helper function (check if req.session.currentUser exists)
//  - check that `password` and the `username` are sent - using helper function

// - check if `username` already exists in the DB
//  - if username exists - forward the error to the error middleware using `next()`
//  - else if username doesn't exists hash the password and create new user in the DB
//  - then assign the  new user document to `req.session.currentUser` and then send  json response

// POST '/auth/logout'
//  - check if the user IS logged in using helper function (check if session exists)
//  - destroy the session
//  - set status code and send the response back

// GET '/auth/private'   --> Only for testing - Same as /me but it returns a message instead
//  - check if the user IS logged in using helper function (check if session exists)
//  - set status code and send the json message response back
