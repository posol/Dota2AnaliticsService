const axios = require('axios');
const DotaRepository = require('../repository/Dota2Repository');

const PRO_MATCHES = 'https://api.opendota.com/api/proMatches';

class Dota2Service {
  static async getData() {
    const httpResponse = await axios.get(PRO_MATCHES);
    return httpResponse.data;
  }

  static async testDb() {
    return DotaRepository.findAll();
  }
}

module.exports = Dota2Service;
