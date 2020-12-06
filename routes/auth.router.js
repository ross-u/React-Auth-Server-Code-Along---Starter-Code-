const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../models/user.model");

// HELPER FUNCTIONS
const {
  isLoggedIn,
  isNotLoggedIn,
  validationLogin
} = require("../helpers/middlewares");

// POST '/auth/signup'
//  - check that user is NOT logged in - using middleware (check if `req.session.currentUser` is set)
//  - check that `password` and the `username` are sent in the req.body - using middleware
//  - check if the `username` is already taken, if it is send an error response - forward the error to the error middleware using `next()`
//  - if `username` is unique (not taken) then:
//     - encrypt the password using bcrypt
//     - create the new user in DB using the `username` and the encrypted password
//     - set the `req.session` using newly created user object, to trigger creation of the session
//     - send json response (new user object) with the status code 201 (Created).

// POST '/auth/login'
//  - check that user is NOT logged in - using middleware (check if `req.session.currentUser` is set)
//  - check that `password` and the `username` are sent in the req.body - using middleware
//  - check if user with the same `username` exists in the DB
//  - if user doesn't exist send an error response - forward the error to the error middleware using `next()`
//  - if user exists - set the `req.session`, to trigger creation of the session
//  - send json response with the status code 200 (OK)

// POST '/auth/logout'
//  - check if the user is logged in using middleware (check if `req.session.currentUser` is set)
//  - destroy the session
//  - set status code 204 (No Content) and send the response back


// GET '/auth/private'   --> Same as /me but it returns a message instead (Example only, no real use)
//  - check if the user IS logged in using middleware (check if `req.session.currentUser` is set)
//  - set status code and send the json message response back

// GET '/auth/me'
//  - check if the user Is logged in using middleware (check if `req.session.currentUser` is set)
//  - if yes, send the response with user info (available on `req.session.currentUser`)

module.exports = router;
