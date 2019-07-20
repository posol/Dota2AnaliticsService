const pool = require('../common/db/pool');

class Dota2Repository {
  static async findAll() {
    const res = await pool.query('SELECT * FROM public.matches');
    console.log(res.rows);
    return res.rows;
  }

  /*
  async save(matches) {
    return null;
  }

  async findById(matchId) {
    return null;
  } */
}

module.exports = Dota2Repository;
