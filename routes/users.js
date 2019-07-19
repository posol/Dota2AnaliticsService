const express = require('express');

const router = express.Router();

/* GET users listing. */
// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
  res.send('fucking node12');
});

module.exports = router;
