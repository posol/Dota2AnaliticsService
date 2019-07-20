const express = require('express');
const DotaService = require('../services/DotaService');

const router = express.Router();
const dotaService = new DotaService();

/* GET proMatches listing. */
router.get('/proMatches', async (req, res, next) => {
  try {
    const matches = await dotaService.getData();
    res.send(matches);
  } catch (e) {
    next(e);
  }
});

router.get('/testdb', async (req, res, next) => {
  try {
    const test = await dotaService.testDb();
    res.send(test);
  } catch (e) {
    next(e);
  }
});

router.get('/testrest', async (req, res, next) => {
  try {
    res.send({ test: 'test' });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
