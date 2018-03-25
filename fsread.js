/**
 * converting fs read method into promise
 */
const fs = require('fs');
const path = require('path');

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(__dirname, filePath), 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
}

// const result = readFile('foo.txt');
// console.log('file content', result);

// readFile('foo.txt')
//   .then(data => {
//     const result = data;
//     console.log('file read complete: ', data.substring(0, 100));
//   })
//   .catch(err => {
//     console.log(err);
//   });
// console.log('hii');

(async () => {
  try {
    const result = await readFile('foo.txt');
    console.log(result.substring(0, 20));
    console.log('hii');
  } catch (err) {
    console.log(err);
  }
})();
