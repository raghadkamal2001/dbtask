const { Pool } = require("pg");

// PostgreSQL Connection Pool
const Db = new Pool({
  user: "postgres", // Change this
  host: "localhost",
  password: "1234", // Change this
  database: "taskdb", // Change this
  port: 5432, // Default PostgreSQL port
});

Db
  .connect()
  .then(() => console.log("✅ Connected to PostgreSQL"))
  .catch((err) => console.error("❌ Connection error", err));

module.exports = Db; // Export the pool for use in other files
