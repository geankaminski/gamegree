const QuestionModel = require('../models/question.model');
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

/******************************************************************************
 *                              Question Controller
 ******************************************************************************/

class QuestionController {
    getAllQuestions = async (req, res, next) => {
        let questionList = await QuestionModel.find();
        if (!questionList.length) {
            throw new HttpException(404, 'Questions not found');
        }

        res.send(questionList);
    };

    createQuestion = async (req, res, next) => {
        const result = await QuestionModel.create(req.body);

        if (!result) {
            throw new HttpException(500, 'Something went wrong');
        }

        res.status(201).send('Question was created!');
    };
}

/******************************************************************************
 *                               Export
 ******************************************************************************/
 module.exports = new QuestionController;