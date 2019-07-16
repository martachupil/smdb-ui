const express = require('express');
const {config} = require('../config/app');
const router = express.Router();
const jwt = require('express-jwt');
const { User } = require('../models/user');

const auth = jwt({
  secret: config.secret,
  userProperty: 'payload'
});

router.get('/profile', auth, async (req, res) => {
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
    return;
  }
    try {
      const u = User.findByPk(req.payload.id);
      res.status(200).json(u);
    } catch (err) {
      res.status(404).json({message: err});
    }
});

router.get('/', async (_, res) => {
  try {
    const users = await User.findAll({attributes: ['id', 'email', 'name']});
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({error: err});
  }
});

router.post('/register', (req, res) => {
  const {name, email, password } = req.body;
  User.create({name, email, password}).then(u => {
    const token = u.generateJwt();
    res.status(200);
    res.json({
      "token" : token
    });
  }).catch(err => res.status(500).json({message: err}));
});

router.post('/login', (req, res) => {
  passport.authenticate('local', function(err, user, info){
    var token;
    if (err) {
      res.status(404).json(err);
      
      return;
    }

    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      res.status(401).json(info);
    }
  })(req, res);
});


module.exports = router;
