// db.ts

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export async function getCategories() {
  const query = 'SELECT * FROM categories';
  const result = await pool.query(query);
  return result.rows;
}

// Exportiere die Funktion getCategories
module.exports = {
  getCategories,
};
