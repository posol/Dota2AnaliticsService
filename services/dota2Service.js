const axios = require('axios');
const DotaRepository = require('../repository/dota2MatchRepository');

const PRO_MATCHES = 'https://api.opendota.com/api/proMatches';

class Dota2Service {
  static async getData() {
    const httpResponse = await axios.get(PRO_MATCHES);
    return httpResponse.data;
  }

  static async saveProMatches() {
    const httpResponse = await axios.get(PRO_MATCHES);
    await DotaRepository.save(httpResponse.data);
  }

  static async getLastProMatches() {
    return DotaRepository.findWithLastDate();
  }

  static async testDb() {
    return DotaRepository.findAll();
  }
}

module.exports = Dota2Service;
