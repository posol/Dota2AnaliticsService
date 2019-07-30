const pool = require('../common/db/pool');

class Dota2MatchRepository {
  static async findAll() {
    const res = await pool.query('select * from public.matches limit 10');
    return res.rows;
  }

  static async findWithLastDate() {
    const res = await pool.query('select * from public.matches order by created_at desc limit 1');
    return res.rows;
  }

  static async findById(matchId) {
    const res = await pool.query('select * from public.matches where id =  $1',[matchId]);
    return res.rows;
  }

  static async save(matches) {
    const sql = 'insert into public.matches(matches) values($1) returning id';
    // FIXME JSON.stringify - синхронная операция, сделать замеры время и если что переписать по другому
    const res = await pool.query(sql, [JSON.stringify(matches)]);
    return res.id;
  }
}

module.exports = Dota2MatchRepository;
