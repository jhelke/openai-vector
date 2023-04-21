const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:');

fs.readFile('config.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  db.run(data, function(err) {
    if (err) {
      console.error(err.message);
    }
    console.log('Table created');
  });
});