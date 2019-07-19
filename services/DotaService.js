const axios = require('axios');

const PRO_MATCHES = 'https://api.opendota.com/api/proMatches';

class DotaService {
  // eslint-disable-next-line class-methods-use-this
  async getData() {
    const httpResponse = await axios.get(PRO_MATCHES);
    return httpResponse.data;
  }
}

module.exports = DotaService;
