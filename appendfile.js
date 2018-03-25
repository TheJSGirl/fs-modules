const fs = require('fs');
const path = require('path');

function appendFiles(path1, path2) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(__dirname, path1), 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      fs.appendFile(path.resolve(__dirname, path2), data, err => {
        if (err) {
          console.log('---', err);
          throw err;
        }
        // console.log('nddjd', data);
      });
    });
  });
}

(async () => {
  try {
    await appendFiles('foo.txt', 'xyz.txt');
  } catch (err) {
    console.log(err);
  }
})();
