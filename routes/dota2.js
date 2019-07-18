const express = require('express');
const router = express.Router();
const DotaService = require('../services/DotaService');
const dotaService = new DotaService();

/* GET proMatches listing. */
router.get('/', async function (req, res, next) {
    try {
        const matches = await dotaService.getData();
        res.send(matches);
    } catch (e) {
        next(e);
    }
});

module.exports = router;
