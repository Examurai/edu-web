const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/data.db', dbConnect);

function dbConnect(err) {
    if (err) {
        console.log('Ошибка', err.message);
        return;
    }
    console.log('База подключена');
}

function dbGetUsers(err, rows, res) {
    if (err) {
        console.log('Ошибка запроса', err.message);
        res.send({
            status: 'success',
            message: 'Ошибка',
        });
        return;
    }
    res.send({
        status: 'success',
        message: 'Данные',
        data: rows
    });
}

function dbGetUserById(err, row, res) {
    if (err) {
        console.log('Ошибка запроса', err.message);
        res.send({
            status: 'success',
            message: 'Ошибка',
        });
        return;
    }
    res.send({
        status: 'success',
        message: 'Данные',
        data: row
    });
}

function getUsers(req, res, next) {
    const sql = 'SELECT * FROM Users';
    db.all(sql, function(err, rows) {
        dbGetUsers(err, rows, res);
    });
}

function getUserById(req, res, next) {
    const id = parseInt(req.params.id);
    const sql = `SELECT * FROM Users WHERE id=${id}`;
    db.all(sql, function(err, row) {
        dbGetUserById(err, row, res);
    });
}

module.exports = {
    getUsers,
    getUserById
};