const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

const db_path = '../../cache.db';
const db = new sqlite3.Database(db_path, (err) => {
    if (err) {
      console.error(`failed to open sqlite3 db at ${db_path}`);
      console.error(err);
      process.exit(1);
    }
  });
console.log("connected to db");

fs.readFile('config.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(`failed to read db setup`);
    console.error(err);
    return;
  }
  db.run(data, function(err) {
    if (err) {
      console.error(`failed to open execute db setup`);
      console.error(err.message);
    }
    console.log('db setup completed');
  });
});
