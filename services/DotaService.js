const axios = require('axios');
const PRO_MATCHES = 'https://api.opendota.com/api/proMatches';

class DotaService {

    async getData() {
        const httpResponse = await axios.get(PRO_MATCHES);
        return httpResponse.data;
    }
}

module.exports = DotaService;
