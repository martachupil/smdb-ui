const mysql = require('mysql');
const { promisify } = require('util');

let connection;

module.exports = {
    connect(params) {
        connection = mysql.createConnection(params);
        return new Promise((res, rej) => connection.connect(function(err) {
            if (err) {
                rej(err);
                return;
            };
            res(connection);
          }));
    },
    query(sql) {
        return promisify(connection.query).call(connection, sql);
    }
};