// Login Controller
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var collection = require('../model/users');

const handlePostRequest = async (req, res) => {
  const { body } = req;
  console.log("Entered In login.js router");

  try {
    const check = await collection.findOne({ name: req.body.username });
    if (!check) {
      const errorMessage = req.query.error ? req.query.error : null;
      let message = '';
      if (errorMessage === 'user_not_found') {
       message = 'User does not exist. Please check your username and try again.';
  }
      return res.redirect('/login?error=user_not_found');
    }

    const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
    if (isPasswordMatch) {
      return res.render('dashboard', { title: 'Dashboard' });
    } else {
      return res.redirect('/login?error=wrong_password');
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.send('Error during login. Please try again.');
  }
};

module.exports = {
  handlePostRequest,
};



