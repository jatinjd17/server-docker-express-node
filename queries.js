const Pool = require("pg").Pool;
const pool = new Pool({
  user: "jatin",
  host: "db",
  database: "jatindb",
  password: "Jatin@123",
  port: 5432,
});

const getUsers = (request, response) => {
  pool.query("SELECT * FROM jtable ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = { getUsers };
