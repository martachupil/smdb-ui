const Sequelize = require('sequelize') 

module.exports = {
    _connection: null,
    connect(cfg) {
        this._connection = new Sequelize(cfg.database, cfg.user, cfg.password, {
            host: cfg.host,
            dialect: 'mysql'
        });

        return this._connection.authenticate();
    },
    getConnection() {
        return this._connection;
    }
};