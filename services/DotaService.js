const axios = require('axios');
const DotaRepository = require('../repository/DotaRepository');

const PRO_MATCHES = 'https://api.opendota.com/api/proMatches';
// FIXME сделать замеры веремени работы с бд
class DotaService {
  async getData() {
    const httpResponse = await axios.get(PRO_MATCHES);
    return httpResponse.data;
  }

  async testDb() {
    return await DotaRepository.findAll();
  }
}

module.exports = DotaService;
