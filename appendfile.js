const fs = require('fs');
const path = require('path');

function appendFiles(path1, path2) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(__dirname, path1), 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      fs.appendFile(path.resolve(__dirname, path2), data, (err, data) => {
        if (err) {
          throw err;
        }
        console.log('nddjd', data);
      });
    });
  });
}

(async () => {
  await appendFiles('foo.txt', 'xyz.txt');
})();
