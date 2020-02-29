const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../models/user");

// HELPER FUNCTIONS
const {
  isLoggedIn,
  isNotLoggedIn,
  validationLogin
} = require("../helpers/middlewares");

// POST '/auth/signup'
//  - check that user is NOT logged in - using helper function (check if req.session.currentUser exists)
//  - check that `password` and the `username` are sent - using helper function
//  - check if the `username` exists, if it does send a response with an error
//  - if `username` is unique then:
//     - encrypt the password using bcrypt
//     - create the new user in DB using the `username` and the encrypted password
//     - save the newly created user in the `session`
//     - send back the response 201 (created) and the new user object

// POST '/auth/login'
//  - check that user is NOT logged in - using helper function (check if req.session.currentUser exists)
//  - check that `password` and `username` are sent - using helper function
//  - check if user exists in the DB
//  - if user doesn't exist - forward the error to the error middleware using `next()`
//  - if user exists assign the user document to `req.session.currentUser`
//  - send  json response

// POST '/auth/logout'
//  - check if the user is logged in using helper function (check if session exists)
//  - destroy the session
//  - set status code and send the response back

// GET '/auth/me'
//  - check if the user IS logged in using helper function (check if session exists)
//  - if yes, send the response with user info (available on req.session.currentUser)

// - check if `username` already exists in the DB
//  - if username exists - forward the error to the error middleware using `next()`
//  - else if username doesn't exists hash the password and create new user in the DB
//  - then assign the  new user document to `req.session.currentUser` and then send  json response

// GET '/auth/private'   --> Only for testing - Same as /me but it returns a message instead
//  - check if the user IS logged in using helper function (check if session exists)
//  - set status code and send the json message response back

module.exports = router;
