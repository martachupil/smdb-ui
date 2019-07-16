const Sequelize = require('sequelize');
const crypto = require('crypto');
var jwt = require('jsonwebtoken');
const db = require('../db');

let secret = null;

class User extends Sequelize.Model {
    set password(value) {
        const salt = crypto.randomBytes(16).toString('hex');
        const hash = crypto.pbkdf2Sync(value, salt, 1000, 64, 'sha512').toString('hex');
        this.setDataValue('salt', salt);
        this.setDataValue('hash', hash);
    }

    validPassword(pass) {
        const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
        return hash == pass;
    }

    generateJwt() {
        var expiry = new Date();
        expiry.setDate(expiry.getDate() + 7);

        return jwt.sign({
            _id: this.id,
            email: this.email,
            name: this.name,
            exp: parseInt(expiry.getTime() / 1000),
        }, secret);
    }
}
User.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { isEmail: true }
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { notEmpty: true }
    },
    hash: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    salt: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.VIRTUAL,
        set(val) {
            const salt = crypto.randomBytes(16).toString('hex');
            const hash = crypto.pbkdf2Sync(val, salt, 1000, 64, 'sha512').toString('hex');
            this.setDataValue('salt', salt);
            this.setDataValue('hash', hash);
        },
        validate: {
            isLongEnough: function (val) {
              if (val.length < 7) {
                throw new Error("Please choose a longer password");
             }
          }
        }
    }
}, { 
    sequelize: db.getConnection(),
    modelName: 'users',
    createdAt: false,
    updatedAt: false,
    deletedAt: false,
});

exports.User = User;
exports.setSecret = (val) => secret = val;