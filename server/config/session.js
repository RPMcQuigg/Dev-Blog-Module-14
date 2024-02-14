const express = require('express');
const router = express.Router();
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  res.render('dashboard');
});


router.get('/settings', withAuth, (req, res) => {
  res.render('settings');
});

module.exports = router;
