const express = require('express');
const router = express.Router();
const questionController = require('../controllers/question.controller');
const auth = require('../middleware/auth.middleware');
const Role = require('../utils/userRoles.utils');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

// const { validateLogin } = require('../middleware/validators/userValidator.middleware');

router.get('/', auth(), awaitHandlerFactory(questionController.getAllQuestions)); // localhost:3000/api/v1/questions
router.post('/', auth(Role.Admin), awaitHandlerFactory(questionController.createQuestion)); // localhost:3000/api/v1/questions

module.exports = router;