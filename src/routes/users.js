const express = require('express');

const UserController = require('../controller/users.js');

const router = express.Router();


// CREATE - POST
router.post('/', UserController.CreateUser);

// READ - GET
router.get('/', UserController.GetAllUsers);

// UPDATE - PATCH
router.patch('/:idUser', UserController.UpdateUser);

// DELETE - DELETE
router.delete('/:idUser', UserController.DeleteUser);

module.exports = router;