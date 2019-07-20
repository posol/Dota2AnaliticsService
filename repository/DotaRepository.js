const pool = require('../common/db/pool');

class DotaRepository {
  async save(matches) {
    return null;
  }

  static async findAll() {
    const res = await pool.query('SELECT * FROM matches');
    console.log(res.rows);
    return res.rows;
  }

  async findById(matchId) {
    return null;
  }
}

module.exports = DotaRepository;
