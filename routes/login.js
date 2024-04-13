// Login route
var express = require('express');
var router = express.Router();
var loginController = require('../controllers/login');

// Middleware function to log incoming requests
router.use((req, res, next) => {
  console.log(`Incoming request to loginRouter: ${req.method} ${req.originalUrl}`);
  next();
});

/* GET login page. */
router.get('/login', function (req, res, next) {
  // Check if there's an error message in the query parameters
  const errorMessage = req.query.error;
  let message = '';
  if (errorMessage === 'user_not_found') {
    message = 'User does not exist. Please check your username and try again.';
  }
  res.render('login', { title: 'Login' });
});


/* Delagate the responsibility to the controller */

  router.post('/login', loginController.handlePostRequest);


module.exports = router;