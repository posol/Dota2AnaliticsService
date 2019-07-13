var express = require('express');
var router = express.Router();
const axios = require('axios');

const PRO_MATCHES = 'https://api.opendota.com/api/proMatches';

/* GET proMatches listing. */
router.get('/', async function (req, res, next) {
    try {
        const response = await axios.get(PRO_MATCHES);
        res.send(response.data);
    } catch (e) {
        next(e);
    }
});

module.exports = router;
