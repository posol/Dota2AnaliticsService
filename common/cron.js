const cron = require('node-cron');
const DotaService = require('../services/dota2Service');

module.exports.schedule = () => {
  cron.schedule('*/5 * * * *', () => {
    DotaService.saveProMatches();
  });
};
