var express = require('express');
var router = express.Router();

/* GET dashboard page. */
router.get('/dashboard', function (req, res, next) {
    console.log('Entered in dashboard Router');
  res.render('dashboard', { title: 'Dashboard' });
});

module.exports = router;