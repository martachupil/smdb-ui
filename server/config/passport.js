const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models/user');

passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  async function(username, password, done) {
    try {
        const u = await User.findOne({ where: {email: username}});
        if (!u) {
            // Return if user not found in database
            return done(null, false, {
                message: 'User not found'
            });
        }

        if (!u.validPassword(password)) {
            return done(null, false, {
                message: 'Password is wrong'
            });
        }

        // If credentials are correct, return the user object
        return done(null, u);
    } catch (err) {
        done(err);
    }
  }
));