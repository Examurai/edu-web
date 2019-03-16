const express = require('express');
const router = express.Router();

const func = require('../funcs/api.func');

router.get('/users', func.getUsers);
router.get('/users/:id', func.getUserById);
module.exports = router;