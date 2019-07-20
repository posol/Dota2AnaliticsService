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
    const start = new Date();
    const hrstart = process.hrtime();

    const records = await dotaService.testDb();

    const end = new Date() - start;
    const hrend = process.hrtime(hrstart);
    console.info('Execution time: %dms', end);
    console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);

    result = {data: records, time: `Execution time: %dms' ${end}`, time2: `Execution time (hr): %ds ${hrend[0]}, %dms  ${hrend[1] / 1000000}`};
    res.send(result);
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
