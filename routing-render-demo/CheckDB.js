const Database = require('better-sqlite3');
const db = new Database('data.db');

try {
  const news = db.prepare("SELECT * FROM news").all();
  console.log(news);
} catch (error) {
  console.error("Error querying the news table:", error.message);
} finally {
  db.close();
}
