const query = require('../db/db-connection');
const { multipleColumnSet } = require('../utils/common.utils');
const Role = require('../utils/userRoles.utils');

class QuestionModel {
    tableName = 'question';

    find = async () => {
        let sql = `SELECT * FROM ${this.tableName}`;

        return await query(sql);
    }

    create = async ({ question, correct_answer, alternative1, alternative2, alternative3}) => {
        const sql = `INSERT INTO ${this.tableName}
        (question, correct_answer, alternative1, alternative2, alternative3) VALUES (?,?,?,?,?)`;

        const result = await query(sql, [question, correct_answer, alternative1, alternative2, alternative3]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }

    delete = async (id) => {
        const sql = `DELETE FROM ${this.tableName}
        WHERE id = ?`;
        const result = await query(sql, [id]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }

}

module.exports = new QuestionModel;