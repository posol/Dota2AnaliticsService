const axios = require('axios');
const DotaRepository = require('../repository/DotaRepository');

const PRO_MATCHES = 'https://api.opendota.com/api/proMatches';

class DotaService {
  static async getData() {
    const httpResponse = await axios.get(PRO_MATCHES);
    return httpResponse.data;
  }

  static async testDb() {
    return DotaRepository.findAll();
  }
}

module.exports = DotaService;
