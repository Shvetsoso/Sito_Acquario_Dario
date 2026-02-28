//  registrazione

const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  res.json({ message: 'Login OK' });
});

module.exports = router;

//  PROVVISORIO da rivdere 
/*
router.post(
  '/login',
  validate(loginSchema),
  controller.login
);
*/