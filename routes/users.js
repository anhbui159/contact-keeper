const express = require('express');

router = express.Router();

// @route POST api/users
// @desc Register a user
// @access Public
router.post('/', (req, res) => {
  res.send('Register an user');
});

module.exports = router;
