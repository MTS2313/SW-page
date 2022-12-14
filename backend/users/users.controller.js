const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.post('/authenticate', authenticate);
router.get('/verifyToken', verifyToken);

module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => res.json(user))
        .catch(next);
}

function verifyToken(req, res, next) {
    userService.verifyToken()
        .then(users => res.json(users))
        .catch(next);
}
